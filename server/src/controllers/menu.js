import * as menuService from  '../services/menu'


 export const getMenu = async (req, res ) => {
    try {
        const respone = await menuService.getMenuService()
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}
 export const getMenuLimit = async (req, res ) => {
    const {offset ,...query} = req.query

    try {
        const respone = await menuService.getMenuLimitService(offset,query)
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}

export const updateMenu = async (req, res) => {  
    try {
        if (!req.body.id){
            return res.status(400).json({
                err: 1,
                msg: 'Not parameters'
            })
        } 
        const data = req.body;
        const response = await menuService.updateMenuService(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const deleteMenu = async (req, res) => {
    
    try {
        if (!req.body.id){
            return res.status(400).json({
                err: 1,
                msg: 'Not parameters'
            })
        } 
        const response = await menuService.deleteMenuService(req.body.id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const createMenu = async (req, res) => {
    const data = req.body
    try {
        if (!data) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await menuService.createMenuService(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}