'use client';

import { useEffect, useRef } from 'react';
import * as OGL from 'ogl';

const FluidText = ({ children, className = '' }) => {
    const wrapperRef = useRef(null);
    const canvasContainerRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const canvasContainer = canvasContainerRef.current;
        if (!wrapper || !canvasContainer) return;

        const _size = [2048, 1638];
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.inset = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvasContainer.appendChild(canvas);

        const renderer = new OGL.Renderer({ dpr: 2, canvas, alpha: false });
        const gl = renderer.gl;

        let aspect = 1;
        const mouse = new OGL.Vec2(-1);
        const velocity = new OGL.Vec2();

        const vertex = `
            attribute vec2 uv;
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0, 1);
            }
        `;

        const fragment = `
            precision highp float;
            uniform sampler2D tWater;
            uniform sampler2D tFlow;
            uniform float uTime;
            varying vec2 vUv;
            uniform vec4 res;

            void main() {
                vec3 flow = texture2D(tFlow, vUv).rgb;
                vec2 uv = .5 * gl_FragCoord.xy / res.xy;
                vec2 myUV = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                myUV -= flow.xy * (0.15 * 1.2);
                vec2 myUV2 = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                myUV2 -= flow.xy * (0.125 * 1.2);
                vec2 myUV3 = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                myUV3 -= flow.xy * (0.10 * 1.4);
                vec3 tex = texture2D(tWater, myUV).rgb;
                vec3 tex2 = texture2D(tWater, myUV2).rgb;
                vec3 tex3 = texture2D(tWater, myUV3).rgb;
                gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
            }
        `;

        const flowmap = new OGL.Flowmap(gl, {
            falloff: 0.3,
            dissipation: 0.92,
            alpha: 0.5,
        });

        const geometry = new OGL.Geometry(gl, {
            position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
            uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
        });

        const texture = new OGL.Texture(gl, {
            minFilter: gl.LINEAR,
            magFilter: gl.LINEAR,
        });

        const textureCanvas = document.createElement('canvas');
        textureCanvas.width = _size[0];
        textureCanvas.height = _size[1];
        const ctx = textureCanvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, textureCanvas.height);
        gradient.addColorStop(0, '#F2D36C');
        gradient.addColorStop(0.25, '#D7B05A');
        gradient.addColorStop(0.5, '#496F3D');
        gradient.addColorStop(0.7, '#28A8CC');
        gradient.addColorStop(0.85, '#1A587A');
        gradient.addColorStop(1, '#0D3456');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
        texture.image = textureCanvas;

        const imageAspect = _size[1] / _size[0];
        let a1, a2;
        if (window.innerHeight / window.innerWidth < imageAspect) {
            a1 = 1;
            a2 = (window.innerHeight / window.innerWidth) / imageAspect;
        } else {
            a1 = (window.innerWidth / window.innerHeight) * imageAspect;
            a2 = 1;
        }

        const program = new OGL.Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                tWater: { value: texture },
                res: { value: new OGL.Vec4(window.innerWidth, window.innerHeight, a1, a2) },
                img: { value: new OGL.Vec2(_size[1], _size[0]) },
                tFlow: flowmap.uniform,
            },
        });

        const mesh = new OGL.Mesh(gl, { geometry, program });

        function resize() {
            const rect = wrapper.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            const imgAspect = _size[1] / _size[0];
            let na1, na2;
            if (h / w < imgAspect) {
                na1 = 1;
                na2 = (h / w) / imgAspect;
            } else {
                na1 = (w / h) * imgAspect;
                na2 = 1;
            }

            mesh.program.uniforms.res.value = new OGL.Vec4(w, h, na1, na2);
            renderer.setSize(w, h);
            aspect = w / h;
        }

        resize();
        window.addEventListener('resize', resize);

        let lastTime = 0;
        const lastMouse = new OGL.Vec2();

        function updateMouse(e) {
            let x, y;
            if (e.changedTouches && e.changedTouches.length) {
                x = e.changedTouches[0].pageX;
                y = e.changedTouches[0].pageY;
            } else if (e.pageX !== undefined) {
                x = e.pageX;
                y = e.pageY;
            } else return;

            const rect = wrapper.getBoundingClientRect();
            const localX = x - rect.left;
            const localY = y - rect.top;

            mouse.set(localX / rect.width, 1.0 - localY / rect.height);

            if (!lastTime) {
                lastTime = performance.now();
                lastMouse.set(localX, localY);
            }

            const deltaX = localX - lastMouse.x;
            const deltaY = localY - lastMouse.y;
            lastMouse.set(localX, localY);

            const time = performance.now();
            const delta = Math.max(10.4, time - lastTime);
            lastTime = time;

            velocity.x = deltaX / delta;
            velocity.y = deltaY / delta;
            velocity.needsUpdate = true;
        }

        window.addEventListener('mousemove', updateMouse);
        window.addEventListener('touchmove', updateMouse, { passive: true });

        let animId;
        function update(t) {
            animId = requestAnimationFrame(update);

            if (!velocity.needsUpdate) {
                mouse.set(-1);
                velocity.set(0);
            }
            velocity.needsUpdate = false;

            flowmap.aspect = aspect;
            flowmap.mouse.copy(mouse);
            flowmap.velocity.lerp(velocity, velocity.len() ? 0.15 : 0.1);
            flowmap.update();

            program.uniforms.uTime.value = t * 0.01;
            renderer.render({ scene: mesh });
        }

        animId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', updateMouse);
            window.removeEventListener('touchmove', updateMouse);
            canvas.remove();
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, []);

    return (
        <span
            ref={wrapperRef}
            className={`relative inline-block ${className}`}
            style={{ isolation: 'isolate' }}
        >
            <span
                ref={canvasContainerRef}
                className="absolute inset-0 overflow-hidden"
                style={{ zIndex: 0 }}
            />
            <span
                className="relative block"
                style={{
                    mixBlendMode: 'screen',
                    background: 'white',
                    color: 'black',
                    zIndex: 1,
                    padding: '0.05em 0.1em',
                    borderRadius: '0.1em',
                }}
            >
                {children}
            </span>
        </span>
    );
};

export default FluidText;
