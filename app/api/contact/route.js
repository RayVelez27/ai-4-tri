const WEBHOOK_URL = 'https://propellerfocal.app.n8n.cloud/webhook/e1bcf4ca-16bc-427b-ae13-a9b5b1d0e20b';

export async function POST(request) {
    const body = await request.json();

    const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        return Response.json({ error: 'Failed to submit' }, { status: 500 });
    }

    return Response.json({ success: true });
}
