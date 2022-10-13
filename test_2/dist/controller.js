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
const crypto_service_1 = __importDefault(require("./service/crypto-service"));
exports.default = new class CryptoController {
    getBalance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const EthereumBalance = yield crypto_service_1.default.getEthereumBalance();
            const tokens = yield crypto_service_1.default.getTokensPerAddress();
            const data = {
                balance: EthereumBalance,
                tokens: tokens
            };
            return res.json(data);
        });
    }
};
