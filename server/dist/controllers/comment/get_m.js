"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../../models/post"));
const user_1 = __importDefault(require("../../models/user"));
const comment_1 = __importDefault(require("../../models/comment"));
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.cookies.id;
    try {
        yield comment_1.default
            .findAll({
            attributes: {
                exclude: ["createdAt", "updateTimestamp", "userId"],
            },
            include: [
                {
                    model: user_1.default,
                    attributes: ["nickname"],
                },
                {
                    model: post_1.default,
                    attributes: ["title", "dueDate"],
                },
            ],
            where: {
                userId,
            },
        })
            .then((data) => {
            res.status(200).json({
                data,
                message: "내가 쓴 댓글이 성공적으로 조회되었습니다.",
            });
        });
    }
    catch (err) {
        console.log(err);
        return res.status(501).json({ message: "서버에러 입니다." });
    }
});
exports.default = get;
//# sourceMappingURL=get_m.js.map