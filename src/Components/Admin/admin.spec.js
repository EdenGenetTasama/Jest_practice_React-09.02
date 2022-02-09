import { HelloMassage, HelloName, HelloNameAndAge, HeaderText, GetMailText } from "./admin";
import ReactDOM from "react-dom";

describe("Check HelloMassage function", () => {
  it("check if string hello user upper", () => {
    expect(HelloMassage()).toEqual("Hello User");
  });
});

describe("Check HelloName function", () => {
  it("Check if string", () => {
    const result = HelloName(1234);
    expect(typeof result).toEqual("string");
  });
  it("Check if null", () => {
    const result = HelloName();
    expect(result).toBe("Good morning undefined");
  });
  it("Check if string and number", () => {
    const result = HelloName("Mike12");
    expect(result).toEqual("Good morning Mike12");
  });
});

describe("Check HelloNameAndAge function", () => {
  it("check if over 18", () => {
    const result = HelloNameAndAge("Eden", 20);
    expect(result).toEqual("good morning Eden age 20");
  });
  it("check if under 18", () => {
    const result = HelloNameAndAge("Mark", 12);
    expect(result).toEqual("sorry you're under 18");
  });
  it("check if number is under 0 ", () => {
    const result = HelloNameAndAge("Dan", -50);
    expect(result).toEqual("sorry you're under 18");
  });
});

describe("Check HeaderText function", () => {
  it("check if element exist", () => {
    expect(HeaderText()).toEqual(<h1>Good night</h1>);
  });
  it("check if text exist", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HeaderText />, div);
    expect(div.firstChild.innerHTML).toEqual(`Good night`);
  });
  it("Check if not null", () => {
    expect(HeaderText()).not.toBe(null);
  });
  it("Check if not 0 ", () => {
      expect(HeaderText()).not.toBe(0)
  });
});

describe("Check GetMailText function" , ()=>{
    it("check if get mail" , ()=>{
        expect(GetMailText("aaa@gmail.com")).toEqual("Aaaa@gmail.com")
    })
})