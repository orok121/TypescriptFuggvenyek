"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        function buildName(firstName, lastName) {
            if (lastName) {
                return firstName + " " + lastName;
            }
            else {
                return firstName;
            }
        }
        const result1 = buildName("Bob"); // works correctly now
        // const result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
        const result3 = buildName("Bob", "Adams"); // ah, just right
        res.write(result3 + "<br>");
        res.write(result1);
        // tslint:disable-next-line: prefer-const
        let z = 100;
        function addToZ(x, y) {
            return x + y + z;
        }
        const result2 = addToZ(1, 3);
        res.write("<br>" + result2);
        function buildName1(firstName = "Will", lastName) {
            return firstName + " " + lastName;
        }
        // let result4 = buildName1("Bob");                  // error, too few parameters
        // let result5 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
        const result6 = buildName1("Bob", "Adams"); // okay and returns "Bob Adams"
        const result7 = buildName1(undefined, "Adams"); // okay and returns "Will Adams"
        res.write("<br>" + result6);
        res.write("<br>" + result7);
        res.write("<br><br><b>GitHub repository:</b><br>");
        res.write("<a href='https://github.com/orok121/Eloadas.git' target='_blank'>" +
            "https://github.com/orok121/Eloadas.git</a><br>");
        res.write("<b>Heroku:</b><br>");
        res.write("<a href='https://bemutatofunctionsfortypescript.herokuapp.com/' target='_blank'>" +
            "https://bemutatofunctionsfortypescript.herokuapp.com/</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map