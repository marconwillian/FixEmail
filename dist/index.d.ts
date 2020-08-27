/**
 * @todo Task list
 * @body [ ] Verify if email is valid
 * [ ] Remove character inregular
 * [ ] Format domain
 * [ ] Verify if this email exist
 */
export declare const validate: (email: string) => boolean;
export interface FixEmail {
    email: string;
    valid: boolean;
}
declare const fixEmail: (email: string) => FixEmail;
export default fixEmail;
