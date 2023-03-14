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