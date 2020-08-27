"use strict";
/**
 * @todo Task list
 * @body [ ] Verify if email is valid
 * [ ] Remove character inregular
 * [ ] Format domain
 * [ ] Verify if this email exist
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
var email_validator_1 = __importDefault(require("email-validator"));
exports.validate = function (email) {
    return email_validator_1.default.validate(email);
};
var updateEmail = function (email) {
    var removeSpace = email.replace(/ /g, '');
    var removeDuplePoint = removeSpace.replace(/\.{2,}/g, '.');
    return removeDuplePoint;
};
var fixEmail = function (email) {
    if (!exports.validate(email)) {
        var fixedEmail = updateEmail(email);
        return {
            email: fixedEmail,
            valid: exports.validate(fixedEmail)
        };
    }
    return {
        email: email,
        valid: true
    };
};
exports.default = fixEmail;
