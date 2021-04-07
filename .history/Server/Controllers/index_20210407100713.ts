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
    res.render('index', { title: 'About Us', page: 'about', displayName: ''    });
}

export function DisplayServicesPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: ''    });
}

export function DisplayProjectsPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: ''    });
}

export function DisplayContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: ''    });
}

export function DisplayLoginPage(req:Request, res:Response, next:NextFunction): void
{
    // Check if a user is logged in.
    //-If not, render the login page, otherwise redirect to contact-list
    if (!req.user)
        res.render('index', { title: 'Login', page: 'login', displayName: ''    });
    
    
    return res.redirect("./contact-list");
}

export function DisplayRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    // Check if a user is logged in.
    //-If not, render the login page, otherwise redirect to contact-list
    if (!req.user)
        res.render('index', { title: 'Register', page: 'register', displayName: ''    });

    return res.redirect("./contact-list");
}


/************************ 
 * Process Page Functions
 ************************/
 
export function ProcessLoginPage(req:Request, res:Response, next:NextFunction): void
{
    passport.authenticate('local', (err, user, info) => {
        // Check for Server Errors
        if (err)
        {
            console.error(err);
            return next(err);
        }
        // Check for Login Errors
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) => {
            // Check for Database Errors
            if (err)
            {
                console.error(err);
                return next(err);
            }

            return res.redirect('/contact-list');
        });

    });
    res.redirect("/contact-list");
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