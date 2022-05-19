/**
 * 解法1，使用两个栈
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

  let stack1 = new Stack()
  let stack2 = new Stack()

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      stack1.push(s[i])
    } else {
      stack1.pop()
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== "#") {
      stack2.push(t[i])
    } else {
      stack2.pop()
    }
  }

  if (stack1.length() !== stack2.length()) {
    return false
  }

  while(!stack1.isEmpty()) {
    if (stack1.pop() !== stack2.pop()) {
      return false
    }
  }

  return true;
};

class Stack {
  constructor() {
    this._stack = []
  }

  push(item) {
    this._stack.push(item)
  }

  pop() {
    return this._stack.pop()
  }

  length() {
    return this._stack.length
  }

  isEmpty() {
    return this._stack.length === 0
  }
}

/**
 * 解法2，使用双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare2 = function(s, t) {
  let skipS = 0;
  let skipT = 0;
  let i = s.length - 1;
  let j = t.length - 1;

  while(i >= 0 || j >= 0) {
    while(i >= 0) {
      if (s[i] === "#") {
        skipS += 1;
        i--;
      } else if (skipS > 0) {
        skipS -= 1;
        i--;
      } else {
        break;
      }
    }
    while(j >= 0) {
      if (t[j] === "#") {
        skipT += 1;
        j--;
      } else if (skipT > 0) {
        skipT -= 1;
        j--;
      } else {
        break;
      }
    }

    if(i >= 0 && j >= 0) {
      if (s[i] !== t[j]) {
        return false;
      }
    } else if (i >= 0 || j >= 0) {
      return false;
    }
    i--;
    j--;
  }

  return true;
}

const result = backspaceCompare2("bbb", "bbb#")

console.log(result)