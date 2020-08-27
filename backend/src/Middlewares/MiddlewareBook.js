const MiddlewareBook = async(req,res,next)=>{
    const {
        name,
        categories,
        description

    }= req.body;

    if(!name){
        return res.status(400).json({ err: 'nome é obrigatorio' });

    }else if(!categories){
        return res.status(400).json({ err: 'categoria é obrigatoria' });

    }else if(!description){
        return res.status(400).json({ err: 'descrição é obrigatorio' });

    }else{
        next();
    }
}

module.exports = MiddlewareBook;