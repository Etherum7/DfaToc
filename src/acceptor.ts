//  Typescript program to implement DFA that accepts
//  all Stringing which follow the language
//  L = {a ^ n b ^ m (n)mod 2 = 0, m>= 1 }

//  This function is for the dfa = starting
//  dfa = state (zeroth) of DFA
const start = (c: string) => {
  let dfa: number;
  if (c === "a") {
    dfa = 1;
  } else if (c === "b") {
    dfa = 3;
  }

  //  -1 is used to check for any
  //  invalid symbol
  else {
    dfa = -1;
  }
  return dfa;
};

//  This function is for the first
//  dfa = state of DFA
const state1 = (c: string) => {
  let dfa: number;
  if (c === "a") {
    dfa = 2;
  } else if (c === "b") {
    dfa = 4;
  } else {
    dfa = -1;
  }
  return dfa;
};

//  This function is for the second
//  dfa = state of DFA
const state2 = (c: string) => {
  let dfa: number;
  if (c === "b") {
    dfa = 3;
  } else if (c === "a") {
    dfa = 1;
  } else {
    dfa = -1;
  }
  return dfa;
};

//  This function is for the third
//  dfa = state of DFA
const state3 = (c: string) => {
  let dfa: number;
  if (c === "b") {
    dfa = 3;
  } else if (c === "a") {
    dfa = 4;
  } else {
    dfa = -1;
  }
  return dfa;
};

//  This function is for the fourth
//  dfa = state of DFA
const state4 = (c: string) => {
  const dfa = -1;
  return dfa;
};

export const isAccepted = (value: string) => {
  //  store length of String
  const l = value.length;

  //  dfa tells the number associated
  //  with the present dfa = state
  let dfa = 0;

  for (let i = 0; i < l; i++) {
    if (dfa === 0) {
      dfa = start(value[i]);
    } else if (dfa === 1) {
      dfa = state1(value[i]);
    } else if (dfa === 2) {
      dfa = state2(value[i]);
    } else if (dfa === 3) {
      dfa = state3(value[i]);
    } else if (dfa === 4) {
      dfa = state4(value[i]);
    } else {
      return 0;
    }
  }
  if (dfa === 3) {
    return 1;
  } else {
    return 0;
  }
};
// let String = "aaaaaabbbb"
//     if (isAccepted(String)) {
//         print("ACCEPTED")   }
//     else:
//         print("NOT ACCEPTED")
