import articleModel from '../models/article';

export const actions = {
    createArticle: async (req, res, next) => {
        try {
            const result = await articleModel(req.body).save();
            res.json({
                code: 1,
                msg: '添加成功！'
            });
        } catch (error) {
            res.json({
                code: 1,
                msg: '添加失败！'
            });
        }
    },
    queryArticle: async (req, res, next) => {
        try {
            const result = await articleModel.find({}, {
                author: true,
                title: true,
                tag: true,
                category: true,
                desc: true,
                createAt: true,
                updateAt: true,
                cover: true,
                readCount: true
            });

            res.json({
                code: 1,
                msg: '获取分类成功',
                data: result
            });
        } catch (err) {
            console.log(err);
            res.json({
                code: 0,
                msg: '获取分类失败'
            });
        }
    },
    queryDetail: async (req, res, next) => {
        const _id = req.body._id
        try {
            const result = await articleModel.findById({
                _id: _id
            });
            res.json({
                code: 1,
                msg: '获取详情成功',
                data: result
            });

        } catch (err) {
            console.log(err);
            res.json({
                code: 0,
                msg: '获取分类失败'
            });
        }
    },
}