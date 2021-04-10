import express, {Request, Response, NextFunction} from 'express';

// Contact Model
import Contact from "../Models/contact"; // Contact Alias

/************************ 
 * Display Page Functions
 ************************/
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.contacts.find()
    Contact.find(function(err, contacts){
      if(err)
      {
        return console.error(err);
      }
      return res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: 'temp'  });
    });
}
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    
}
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    
}


/************************ 
 * Process Page Functions
 ************************/
 export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
 {
     
 }
 export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
 {
     
 }
 export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
 {
     
 }