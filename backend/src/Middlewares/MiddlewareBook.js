const MiddlewareBook = async (req, res, next) => {
    const {
        title,
        categories,
        author,
        description,
        subDescription,
        bookLink,
        imgLink

    } = req.body;

    if (!title) {
        return res.status(400).json({ err: 'name is necessary' });

    } else if (!categories) {
        return res.status(400).json({ err: 'category is necessary' });

    } else if (!author) {
        return res.status(400).json({ err: 'author is necessary' });

    } else if (!description) {
        return res.status(400).json({ err: 'description is necessary' });

    } else if (!subDescription) {
        return res.status(400).json({ err: 'subDescription is necessary' });
   
    }else if (!bookLink) {
        return res.status(400).json({ err: 'link book is necessary' });
    } else if (!imgLink) {
        return res.status(400).json({ err: 'link img is necessary' });
    }
    else {
        next();
    }
}

module.exports = MiddlewareBook;