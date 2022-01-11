import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "./Button";

describe("Button 컴포넌트 (@testing-library/react)", () => {
  it("컴포넌트가 정삭적으로 생성된다", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const button = render(<Button />);
    expect(button).not.toBe(null);
  });

  it("button이라고 쓰여있는 엘리먼트는 HTMLButtonElemnet 이다.", () => {
    const { getByText } = render(<Button />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonEl = getByText("button");

    expect(buttonEl).toBeInstanceOf(HTMLButtonElement);
  });

  it('버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸다." 라고 쓰여진다.', () => {
    const { getByText } = render(<Button />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonEl = getByText("button");

    fireEvent.click(buttonEl);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const p = getByText("버튼이 방금 눌렸다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하기 전에는, p 태그 안에 버튼이 눌리지 않았다. 라고 쓰여진다.", () => {
    const { getByText } = render(<Button />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const p = getByText("버튼이 눌리지 않았다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하고 5초 뒤에는, p 태그 안에 버튼이 눌리지 않았다. 라고 쓰여진다", () => {
    jest.useFakeTimers();

    const { getByText } = render(<Button />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonEl = getByText("button");

    fireEvent.click(buttonEl);

    act(() => {
      // 5초 흐른다.
      jest.advanceTimersByTime(5000);
    });

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const p = getByText("버튼이 눌리지 않았다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.", () => {
    jest.useFakeTimers();

    const { getByText } = render(<Button />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonEl = getByText("button");

    fireEvent.click(buttonEl);

    // 비 활성화
    // expect(buttonEl.disabled).toBeTruthy();

    // jest-dom
    expect(buttonEl).toBeDisabled();

    act(() => {
      // 5초 흐른다.
      jest.advanceTimersByTime(5000);
    });

    // 활성화
    // expect(buttonEl.disabled).toBeFalsy();

    expect(buttonEl).not.toBeDisabled();
  });
});
