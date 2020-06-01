'use strict';

import React, { Component } from 'react';

import styles from './style.js';

class Block_0 extends Component {
  render() {
    return (
      <div style={styles.mod}>
        <div style={styles.bd}>
          <img
            style={styles.actionBg}
            src={require('./images/img_36720_0_0.png')}
          />
          <span style={styles.info} lines={undefined}>
            关闭全部场景弹窗
          </span>
          <img
            style={styles.icon}
            src={require('./images/img_36720_0_1.png')}
          />
        </div>
        <div style={styles.ft}>
          <div style={styles.wrap}>
            <div style={styles.empty} />
            <span style={styles.word} lines={undefined}>
              V2V
            </span>
          </div>
          <div style={styles.block}>
            <div style={styles.div} />
            <span style={styles.text} lines={undefined}>
              V2I
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Block_0;
