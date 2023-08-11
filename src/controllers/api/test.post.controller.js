export async function postTest(req, res, next) {
    try {
        console.log('Solicitud POST satisfactoria');
        res.status(201).json({ resultado: 'satisfactorio' });
    } catch (error) {
        res.json({ error: error.message });
    }
}