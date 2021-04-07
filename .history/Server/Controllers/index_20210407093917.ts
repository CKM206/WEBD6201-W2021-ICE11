// Imports
import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();

import mongoose from 'mongoose';
import passport from 'passport';

// Create User Model Instance
import User from '../Models/user';

/************************ 
 * Display Page Functions
 ************************/
export function DisplayHomePage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function DisplayAboutPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function DisplayServicesPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function DisplayProjectsPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function DisplayContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function DisplayLoginPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function DisplayRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}


/************************ 
 * Process Page Functions
 ************************/
 
export function ProcessLoginPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function ProcessLogoutPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}
 
export function ProcessRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function ProcessContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}