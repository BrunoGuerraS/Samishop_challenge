import "@testing-library/jest-dom";
import { getPeopleService } from "../service/service";

describe("get return test to api ws", ()=>{
    test("return status 200", () => {
        const response = request(getPeopleService);
        expect(response.status).toBe(200);
    })
})