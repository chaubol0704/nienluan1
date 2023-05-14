import * as bookService from  '../services/book'


 export const getTable = async (req, res ) => {
    const {offset ,...query} = req.query
    try {
        const respone = await bookService.getTable(offset,query)
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}


 export const getBookTable = async (req, res ) => {
    try {
        const respone = await bookService.getBookTableService()
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}
 export const getBookMenu = async (req, res ) => {
    try {
        const respone = await bookService.getBookMenuService(req.query)
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}
 export const getBookTableOfUser = async (req, res ) => {
    // const {phone} = req.body
    try {
        const respone = await bookService.getBookTableUser(req.query)
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}
 export const getAllBookTableOfUser = async (req, res ) => {
    const {offset ,...query} = req.query
    try {
        const respone = await bookService.getBookTable(offset,query)
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}
export const createBook= async (req, res) => {
    const data = req.body
    try {
        if (!data) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await bookService.createBookService(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const updateBook= async (req, res) => {
    const data = req.body
    try {
        if (!data) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await bookService.updateBookService(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const deleteBook = async (req, res) => {
    console.log(req.body.id)
    try {
        if (!req.body.id){
            return res.status(400).json({
                err: 1,
                msg: 'Not parameters'
            })
        } 
        const response = await bookService.deleteBookService(req.body.id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}
export const deleteBookMenu = async (req, res) => {
    console.log(req.body.id)
    try {
        if (!req.body.id){
            return res.status(400).json({
                err: 1,
                msg: 'Not parameters'
            })
        } 
        const response = await bookService.deleteBookMenuService(req.body.id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const createBookMenu= async (req, res) => {
    const dataBook = req.body
    console.log(req.body)
    try {
        if (!dataBook) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await bookService.createBookMenu(dataBook)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

// table
export const deleteTable = async (req, res) => {
    console.log(req.body.id)
    try {
        if (!req.body.id){
            return res.status(400).json({
                err: 1,
                msg: 'Not parameters'
            })
        } 
        const response = await bookService.deleteTable(req.body.id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const updateTable= async (req, res) => {
    const data = req.body
    try {
        if (!data) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await bookService.updateTable(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}
export const setTable= async (req, res) => {
    const data = req.body
    try {
        if (!data) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await bookService.setTable(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}
export const createTable= async (req, res) => {
    const data = req.body
    try {
        if (!data) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await bookService.createTable(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const getStatistics = async (req, res ) => {
    // const {query} = req.query
    console.log(req.query)
    try {
        const respone = await bookService.statistics(req.query)
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}


export const getStatistics_year = async (req, res ) => {
    // const {query} = req.query
    // console.log(req.query)
    try {
        // const respone = await bookService.statistics_year(req.query)
        const respone = await bookService.statistics_year()
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}
