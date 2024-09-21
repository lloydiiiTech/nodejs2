const pal ={
    index:(req, res)=>{
        res.render('index');
    },
    tables:(req, res)=>{
        res.render('tables');
    },
    charts:(req, res)=>{
        res.render('charts');
    },
    forms:(req, res)=>{
        res.render('forms');
    },
    login:(req, res)=>{
        res.render('login');
    },
    register:(req, res)=>{
        res.render('register');
    },
    forget:(req, res)=>{
        res.render('forgetpassword');
    },
    calendar:(req, res)=>{
        res.render('calendar');
    },
    activities:(req, res)=>{
        res.render('activities');
    },
    todo:(req, res)=>{
        res.render('todo');
    }
    
};
module.exports = pal;