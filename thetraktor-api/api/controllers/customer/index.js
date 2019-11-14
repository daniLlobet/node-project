import Router from 'express';
import create from './create.js';
import update from './update.js';
import remove from './remove.js';
import list from './list.js';
import listInactive from './listInactive.js';
import listMixed from './listMixed.js';
import listMale from './listMale.js';
import listFemale from './listFemale.js';
import listOne from './listOne.js';
import removePacks from './removePacks.js';
import listPlan from './listPlan.js';


const router = Router();

router.route('/')
    .post(create)
    .get(list);
router.route('/inactive')
    .get(listInactive);
router.route('/mixed/:top')
    .get(listMixed);
router.route('/male/:top')
    .get(listMale);
router.route('/female/:top')
    .get(listFemale);
router.route('/:id')
    .get(listOne)
    .put(update)
    .delete(remove);

router.route('/plan/:id')
    .get(listPlan);

router.route('/:id/packs')
    .delete(removePacks);

export default router;        