const pal ={
    index:(req, res)=>{
        res.render('index');
    },
    address:(req, res)=>{
        res.render('address');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    fullname:(req, res)=>{
        res.render('fullname');
    },
    moreinfo:(req, res)=>{
        res.render('moreinfo');
    },

    
};
module.exports = pal;