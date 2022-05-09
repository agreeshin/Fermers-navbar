import React from "react";

import Crumb from "../Crumb/Crumb";
import styles from "./BreadCrumbs.module.css";

class BreadCrumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let crumbsChain = [];

    const setPerentsChain = (list) => {
      if (
        crumbsChain.length !== 0 &&
        crumbsChain[crumbsChain.length - 1].url === this.props.currentPointUrl
      ) {
        return;
      }

      for (let item of list) {
        if (
          crumbsChain.length !== 0 &&
          crumbsChain[crumbsChain.length - 1].url === this.props.currentPointUrl
        ) {
          return;
        }
        if (item.url === this.props.currentPointUrl) {
          crumbsChain.push(item);
          return;
        } else if (item.submenu !== undefined) {
          crumbsChain.push(item);
          setPerentsChain(item.submenu);
        } else if (
          list.indexOf(item) === list.length - 1 &&
          crumbsChain.length !== 0
        ) {
          crumbsChain.pop();
          return;
        }
      }
    };

    setPerentsChain(this.props.list);

    return (
      <div className={styles["bread-crumbs"]}>
        {crumbsChain.map((crumb, index) => {
          return (
            <Crumb
              crumb={crumb}
              key={crumb.url}
              isLast={index === crumbsChain.length - 1}
              crumbClickHandler={this.props.menuItemClickHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default BreadCrumbs;
