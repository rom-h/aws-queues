'use strict';

import express from 'express';
const router = express.Router();

router.get('', function (req: express.Request, res: express.Response) {
    res.status(200).json({message: 'Welcome to the Zoo!'});
});

/* 404 */
router.get('*', function (req: express.Request, res: express.Response) {
    res.status(404).json({message: 'Unknown entrypoint'});
});
router.post('*', function (req: express.Request, res: express.Response) {
    res.status(404).json({message: 'Unknown entrypoint'});
});
router.put('*', function (req: express.Request, res: express.Response) {
    res.status(404).json({message: 'Unknown entrypoint'});
});
router.delete('*', function (req: express.Request, res: express.Response) {
    res.status(404).json({message: 'Unknown entrypoint'});
});

export = router;
