import {Router} from 'express';
const employeeMake=Router();
import verifyToken from '../middleware/verifyToken';
import verifyAdmin from '../middleware/verifyAdmin';

import { completeEmployee } from '../Controllers/EmployeeMake';

employeeMake.post("/makeProfile",verifyToken,verifyAdmin,completeEmployee);

export default employeeMake;