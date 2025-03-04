import customerDAO from '../../models/customer/dao.js';

const listPlan = async (req, res) => {

    try {

        console.log(req.params.id)
        if (!req.params.id) {
            res.sendStatus(400);
        } else {

            const customer = await customerDAO.listPlan(req.params.id);

            res.json(customer);
        }
    } catch (error) {

        throw error;
    }
}

export default listPlan;