import React from 'react';
import ReactDOM from 'react-dom';
import UniqueNumber from './UniqueNumber';
import Result from './result';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UniqueNumber />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("has expected children", () => {
    it("has expected children element", () => {
        const wrapper = shallow(<UniqueNumber/>);
        expect(wrapper.find("form").length).toBe(1);
        expect(wrapper.find("label").length).toBe(1);
        expect(wrapper.find("input").length).toBe(1);
        expect(wrapper.find("input").prop(value)).toBe("");
    });
    it("has result component with expected props", () => {
        const wrapper = shallow(<UniqueNumber/>);
        expect(wrapper.find(Result).length).toBe(1);
        expect(wrapper.find(Result).prop("duplicates")).toMatchObject([]);
        expect(wrapper.find(Result).prop("uniques")).toMatchObject([]);
    });
});

describe("when passed a input", () => {
    it("input 7001, 8000, 7001 is duplicate with existing default array", () => {
        const wrapper = shallow(<UniqueNumber defaultInput={"7001, 8000"}/>);
        expect(wrapper.find(Result).prop("duplicates")).toMatchObject(["7001"]);
        expect(wrapper.find(Result).prop("uniques")).toMatchObject(["8000"]);
    });

    it("input 7001-7003", () => {
        const wrapper = shallow(<UniqueNumber defaultInput={"7001-7003"}/>);
        expect(wrapper.find(Result).prop("duplicates")).toMatchObject(["7001", "7003", "7003"]);
        expect(wrapper.find(Result).prop("uniques")).toMatchObject([]);
    })
});