import {
  ForwardRefRenderFunction,
  ReactNode,
  HTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import classnames from "classnames";

import "./tab.scss";

interface TabItem {
  title: string;
  content: any;
  onClick?: () => void;
}

interface BaseTabProps {
  items: Array<TabItem>;
  className?: string;
}

export type TabProps = BaseTabProps;

const Tab: ForwardRefRenderFunction<unknown, TabProps> = (props, ref) => {
  const { className, items } = props;
  const [activeItem, setActiveItem] = useState(0);

  const onClickHandler = (index: number, onClick?: () => void) => {
    setActiveItem(index);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="tech1a-tab">
      <div className="tech1a-tab__header">
        {items.map((item, index) => (
          <div
            className={classnames("tech1a-tab__header-item", [
              activeItem === index ? "active" : "",
            ])}
            onClick={() => onClickHandler(index, item.onClick)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="tech1a-tab__content">
        {items.map((item, index) => (
          <div
            className={classnames("tech1a-tab__content-item", [
              activeItem === index ? "active" : "",
            ])}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
