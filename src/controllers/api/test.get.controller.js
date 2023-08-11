export async function getTest(req, res, next) {
    try {
        console.log('Solicitud GET satisfactoria');
        res.status(201).json({ resultado: 'satisfactorio' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}