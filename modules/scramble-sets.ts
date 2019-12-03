import {SCRAMBLE_TEST_SET_1, SCRAMBLE_TEST_SET_2, SCRAMBLE_TEST_SET_3, SCRAMBLE_TEST_SET_4, SCRAMBLE_TEST_SET_5} from './constants';

export function getScrambleSets (setNamesArray) {
    let scrambles = []

    for (let setName of setNamesArray) {
        populateScrambles(scrambles, setName)
    }
    
    return scrambles
}

function populateScrambles (scrambles, setName) {

    switch (setName) {
            
        case SCRAMBLE_TEST_SET_1:
            
            /* unit-test manual testing (change / add / remove at will; nothing to be saved) */
            
            scrambles.push(`R` );
            scrambles.push(`R'`);
            scrambles.push(`L` );
            scrambles.push(`L'`);
            scrambles.push(`B` );
            scrambles.push(`B'`);
            scrambles.push(`F` );
            scrambles.push(`F'`);
            break;
            
        case SCRAMBLE_TEST_SET_2:
            
            /* initial set from Chao-timer & Sammy's cubetimer app etc. */
            
            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2`); /* orig. scramble; existing green in white cross */
            scrambles.push(`L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 D'`); /* orig. scramble w. 1st moved to last */
            scrambles.push(`B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 D' L2`); /* prev. scramble w. 1st moved to last */
            scrambles.push(`L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 D' L2 B2`); /* prev. scramble w. 1st moved to last */
            scrambles.push(`B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 D' L2 B2 L2`); /* prev. scramble w. 1st moved to last */
            scrambles.push(`D' U F2 D2 R' F D' B' L2 B' R' B L2 D' L2 B2 L2 B2`); /* prev. scramble w. 1st moved to last */
            scrambles.push(`U F2 D2 R' F D' B' L2 B' R' B L2 D' L2 B2 L2 B2 D'`); /* prev. scramble w. 1st moved to last */

            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 U2`); /* test U algorithm for Orange from side into white cross (previously U2 by default) */
            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 U`); /* test U algorithm for Orange from side into white cross (previously U2 by default) */
            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 U`); /* test U algorithm for Orange from side into white cross (previously U2 by default) */
            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 L`); /* test green rotating anti-clockw. as 1st colour */
            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 L'`); /* test green rotating clockwise as 1st colour */
            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 U2`);
            scrambles.push(`D' L2 B2 L2 B2 D' U F2 D2 R' F D' B' L2 B' R' B L2 R'`);

            scrambles.push(`B D2 F' L2 B' D2 U2 B' L2 R2 B2 D' F R2 D' F2 D' R' B2 L' F`); /* Sammy scramble */
            scrambles.push(`U F2 B U' B' L U' F' L F2 R2 U F2 B2 D' L2 D'`);               /* Sammy scramble 2 */
            scrambles.push(`L2 U' R2 B2 D B2 D2 L2 R2 F' D U B L B' U' B' F2 U2 L2`);      /* Sammy scramble 3 */
            scrambles.push(`U2 L2 B' U2 L2 F2 R2 B' D2 F R2 U' R' F D B2 F' U' R2 U R'`);  /* Sammy scramble 4 */
            scrambles.push(`R' F' D' F L2 U B' L' D F2 L2 F2 U2 L F2 L D2 R' F2`);         /* Sammy scramble 5 */
            scrambles.push(`F' U R2 U2 F' L2 D2 L B' D F L2 F' D2 L2 F R2 L2 U2 F D2`);    /* Sammy scramble 6 */
            scrambles.push(`L2 B2 D' L2 U' L2 F2 L2 D' F L2 B2 L F2 L B2 F2 D2 L'`);       /* Sammy scramble 7 */
            scrambles.push(`D2 F R2 B' R2 U2 F R2 B D2 R2 D' B' F' R' B2 U' F D' R2 D2`);  /* Sammy scramble 8 */
            scrambles.push(`R D F' D F U D F2 B2 R' B L2 F' B' R2 U2 F U2 L2`);            /* Sammy scramble 9 */
            scrambles.push(`U' L U' R2 B' R2 F R U' R2 L2 F R2 B' L2 F' D2 R2 F L2`);      /* Sammy scramble 10 */ /* Redundant extra rotation (Second last R') */
            scrambles.push(`D B2 D L2 D F2 R2 U2 L2 U L B' R U' F U' B' L F U`);           /* Sammy scramble 11 */
            scrambles.push(`R2 U B2 L2 D L2 U F2 U2 B2 D R F D2 U2 B' D' B F2 L B2`);      /* Sammy scramble 12 */
            scrambles.push(`R D2 L D2 L' U2 F2 L R2 D2 R2 D L' F' R2 U2 R' B R' U2`);      /* Sammy scramble 13 */ /* Redundant extra rotatiom (Second last F') */
            scrambles.push(`L2 B' R2 F2 L2 U2 F' R2 D2 U' F D' U2 R F U2 R B2 R'`);        /* Sammy scramble 14 */
            break;
            
        case SCRAMBLE_TEST_SET_3:
            
            /* extra scrambles added after initial completion comparison testing/debugging */
            
            scrambles.push(`B' R2 B U2 F' L2 B2 U2 L2 D2 L2 D R' D' F2 U R D F2 R'`);      /* Sammy scramble 15 */
            //scrambles.push(``); /* Sammy scramble 16 */
            //scrambles.push(``); /* Sammy scramble 17 */
            //scrambles.push(``); /* Sammy scramble 18 */
            //scrambles.push(``); /* Sammy scramble 19 */
            //scrambles.push(``); /* Sammy scramble 20 */
            break;

        case SCRAMBLE_TEST_SET_4:
            
            /* 100 loaded from https://ruwix.com/puzzle-scramble-generator/?type=rubiks-cube */
            
            scrambles.push("D' B U' D2 R F2 U2 L2 B U' D2 B F2 R B F D' U B' F' D R' L' U2 F");
            scrambles.push("L' R' F2 B2 U2 L2 R2 D B' D' F R D' F' D' R2 L' U' R L U' L R2 B' D2");
            scrambles.push("D R2 F2 D2 L' F D R U' R L F' B' R2 F L' R F' B' D' L' F' D U B'");
            scrambles.push("L2 D B2 R2 F' U' D L U' D2 B L2 F2 R' B F2 D U2 R B' F D U2 F U2");
            scrambles.push("D' F B2 R F' D' B' R' B' D2 B F U' R U2 B2 D2 L2 F R' D L2 F' L' R'");
            scrambles.push("U' B2 L' U2 B D2 B L2 D2 R2 U' F2 U F' R' L2 U2 R' L' B2 D' B' L U2 R");
            scrambles.push("D2 R' F' B2 U D' F2 L2 U2 L F L R D U2 F2 U B F U2 R' F' L2 R D'");
            scrambles.push("F2 R2 L' D2 B' D' B2 L2 R' U' F' R2 U' R2 U2 R2 B' U' F2 L' B L2 B2 L2 D");
            scrambles.push("F R2 L D2 L R2 F B' R' L2 U2 R' B' R2 F' R' B' F U F2 R' B2 F2 U L'");
            scrambles.push("U' B F2 L' F2 B R2 L' B D R' U2 F2 L2 U2 F' D2 L' F' R U F2 B2 U R'");
            scrambles.push("F' U2 R F L U R U2 F2 L U' F' L' D' U' F R' D2 F' B' D' B2 L R2 U2");
            scrambles.push("U' R' B2 R F R D' R2 U2 B' R' D' R' B D B2 R' B L2 U' D B2 L U2 L'");
            scrambles.push("L' F' R2 L2 U' D' R F R2 L2 F2 B' L D' R B U' F' D F' L R' U R F'");
            scrambles.push("F B2 R2 B2 U2 D' L2 R2 F2 D R' D' F U' D2 F2 U2 D B' R2 L2 D F L2 F'");
            scrambles.push("F U' L2 F D2 R2 D2 L R' F' L' U F2 D2 U2 F D F B2 U2 D' L2 F2 L' B"); 
            scrambles.push("B2 R B2 R' D' B' D L F' R U' F' D L' U' D2 B' L2 F L2 U' L U D2 F"); 
            scrambles.push("F2 B' L' D U2 R F R D2 R B R D' F' R D' L2 B' F L2 R' U' L' B D2"); 
            scrambles.push("U2 R2 F L2 B D' B' F D' F2 B' L' R D2 L R' U' F2 R2 B' U2 R2 B2 F' U2"); 
            scrambles.push("D' U B' U D' F R2 B' D2 B' D2 B2 F U D F2 D U2 L2 U' F' R' F' D L2"); 
            scrambles.push("D F B U2 L2 B R2 L' D R' B' L2 D' U B D2 U' F L2 B' D' B2 F' L2 U2"); 
            scrambles.push("U' D' F R2 D' R' L' F2 U' R' L B L2 B2 U' R' F2 R D' L2 B F L2 R2 B"); 
            scrambles.push("D2 L' D2 F2 R B2 R F' B2 R2 U2 F U2 F R2 B U2 L2 B R2 L2 U L U D"); 
            scrambles.push("B F' R D' U' R B R2 U2 L D R F' D' R B2 F' U D2 B D' R' B' U' D'"); 
            scrambles.push("B' D2 U F2 B' L' B F2 L2 F B U' D F2 B' R2 F2 L' D R' D2 F R2 B' L2");
            scrambles.push("B2 L R F2 R D2 B U' B2 F U2 R U' R' L2 F2 L2 D F2 B R D2 R2 D B2");
            scrambles.push("L' B2 U B2 R U' D F2 R D B2 D' U F' L2 R' D' L' R2 U2 L' U R2 D' L'");
            scrambles.push("B2 D2 U' F' L2 R' B' D R' B U2 L D2 B L2 D2 F' B' R2 L' B2 F U2 D2 B'"); 
            scrambles.push("L' D' U2 R F B2 R' F2 D L2 D2 B2 U D' B' F' D U' R' U F' R2 D U2 R2");
            scrambles.push("D B D B' R' B' R' B' L F' L B L2 F' U2 L' U R B U L2 B U' R' B2");
            scrambles.push("R' D' F2 D' F R' F2 D U2 B2 D' B2 L2 F2 D2 F' D B' D F D2 B' R U D"); 
            scrambles.push("B D2 B D' R' F2 B' L U2 R2 D' B' U2 B F' R2 B2 L2 B2 F D R F L2 D");
            scrambles.push("U2 R B2 L R' F B2 D' L' F B D' F L' F' D' B D R2 F2 D' R U2 L2 U2"); 
            scrambles.push("F2 U D' R2 D L' U' L' U2 D' B' R F2 L' F U L' F2 D' L F2 D' B D R2"); 
            scrambles.push("R U F L' F L2 B2 R2 D' B' U2 F' R2 F' D2 B R' L' F R' B U F2 R2 L2"); 
            scrambles.push("U' R2 L' B L' U2 D2 B' D B L' B2 L2 R2 B' D' L R' U' D2 L D2 R2 F D2");
            scrambles.push("R' D2 F B D B U' R2 B L2 R U D2 B2 F D' L F2 R' B2 U B2 U2 B' R2");
            scrambles.push("L' F' U F' B U2 R' L' D' U L2 R2 F' R D2 B2 R' L' D2 R' U' D' F2 U' F'");
            scrambles.push("D' L D2 B2 L' F2 R2 B' L' F2 B' R L' U' B2 R' L D' F L2 R' B2 F R' F'"); 
            scrambles.push("R' B' R2 U' D' L2 U2 R D L B D' B U' B L2 F D U2 R2 L U L F2 U"); 
            scrambles.push("L' R' F' L' D U' B2 U D' B2 U L R2 D R2 U' F' D U2 B2 D U B R U'");
            scrambles.push("D' R L' F2 D' B' L U D2 L2 D R L2 B' D2 B2 U R2 L' U' F B2 U2 F2 R'"); 
            scrambles.push("F D R2 F B2 U2 F U R' B' R' L' U R D' U' F' U2 L' F2 D' U' L2 B' F");
            scrambles.push("L' R' D U' F2 B D' R2 U2 D2 F D2 U L2 F2 D2 B F R L' U2 R' D2 L' D");
            scrambles.push("L2 F L' R2 B2 R2 L' B' L2 R' B2 L' D' B D2 U' F2 U2 F L' F2 D2 U2 F' U2"); 
            scrambles.push("D2 L R2 U2 L2 D' L' F U' R' F' B' U2 L U' B' L' B F U R L D L' R'");
            scrambles.push("U D B' L' U B' R2 U' L' R B' R D' R L2 U' D2 R F2 U B2 F2 L' B L"); 
            scrambles.push("D L F L' B' L' U2 D R2 B L2 B' L B U2 B2 F2 R2 D' F2 L2 B' L R2 B2"); 
            scrambles.push("L' D' F' L F' D F2 B' R' U2 B2 R B F L2 U' L' B D2 F L2 F R L2 B"); 
            scrambles.push("R D R2 L' D2 U2 F' D U' B L U' D' L B F' R D B U D' L U' L F2"); 
            scrambles.push("R2 D2 F2 B' L2 U2 L' B' F L U D2 R B' R' F R' U R' B' D2 U' B F L2");
            scrambles.push("U L U' F' R2 F L' D L' U' D' B2 L R' U2 D2 F2 D2 U2 L' F2 B' R L F2");
            scrambles.push("B R2 F' L2 R2 U2 B R L2 B' L B' D2 L' U F' U R U' B' U L U B' L'"); 
            scrambles.push("U R2 L U' L' D' U' B' D2 R F R2 B L' D2 R2 B2 L B' U2 B2 R' F2 D2 B2");
            scrambles.push("D' R D F' L2 U B' D2 R F' R2 D2 F' D2 L' U2 D B' D2 B2 U' B' D B' U2");
            scrambles.push("D R2 U2 L' F B U D F D' R B D R' B D L2 F R2 L D' F2 U2 L2 U2"); 
            scrambles.push("F2 R' U' B F' R2 F' U' D' B D U R2 F U' D' F2 L U' L' D2 U' F' B2 R");
            scrambles.push("L2 U' F2 L2 U2 L' D' R2 F U R D R2 U D R2 B R2 B2 L2 F2 D L B' D'");
            scrambles.push("B2 D B2 U F' D2 B D B' F2 U2 D L2 D2 F B' D' R' U' D' F D' F D' F2");
            scrambles.push("R2 L2 B' D2 R2 U2 F2 B' L' F U F R2 B' D2 U2 R L D2 F' L2 B2 R B2 D2");
            scrambles.push("D' L2 R F R B2 L2 B2 F' L D2 F' B R2 F2 B2 R' B2 R2 D' R2 L' D2 B' F"); 
            scrambles.push("R2 B D B' L2 D R2 U2 R U2 F' L2 B' L' F' D2 F2 R' F2 U B2 U D R2 F2"); 
            scrambles.push("F D2 L2 F R2 U F L' D R2 B2 R B F2 R' U2 D' R' F' R2 D U' B2 R F");
            scrambles.push("F U' B U F' U R L B2 D2 R B R U' R L' D' R2 F R U' B L2 D B2");
            scrambles.push("F R' L2 F' L U' F2 U2 D L' R2 B D2 L2 D2 L D2 F2 D2 L2 F' U B F2 R"); 
            scrambles.push("B2 R B2 R' D' L' D2 B2 F L' R U2 B L B2 L2 D B' F' D' F L F' L2 U"); 
            scrambles.push("U' R B2 L2 R' U' F D U2 L B' D2 L2 U L2 D2 B L U2 D2 R' B2 F2 R2 F2");
            scrambles.push("F2 U2 L U2 R B' L' B' D2 L2 B F' R F D' B2 R F B2 L2 R2 B2 R' B' D");
            scrambles.push("U R' D2 L D L R' D' B' L' D2 U2 F B' R' U' F2 R2 L' B R' F2 D2 L2 U'");
            scrambles.push("L' U2 L R2 F' D' U2 B' R' L2 U L' F2 R U2 L2 R' U' F' D2 L R D' L2 R'");
            scrambles.push("L' D2 F' U' F' R F' B2 U R U D' F2 D2 L R2 B2 D R D' F' D2 F U B");
            scrambles.push("U2 B' R L' D B' F' U2 L R2 F' R2 U' D' B R' B' D B' R' B2 R B' D' L");
            scrambles.push("U D2 F2 D2 R2 D' L2 U2 R2 L' D2 U' L' F B U' F B U2 L U R F2 L F2");
            scrambles.push("D2 L2 R2 U' D F2 R' U2 L' U2 D L' F D' U2 F2 U2 R2 F' L D B U' R U'");
            scrambles.push("D F U' F' R' B2 R2 B2 R U' R' U' L R2 U F' L F' L F D' R L2 D R"); 
            scrambles.push("F U' L' D2 F U F' U' B' U' L2 D L2 B2 F L2 U2 D' F2 D2 F' D L2 B' L'"); 
            scrambles.push("U B U' R' U F' R2 L B R F' U2 L F2 U R2 L U B2 D U' B2 D R2 B'");
            scrambles.push("U' R2 D' L2 B D' F2 L2 F D F U' F2 L' U' D' R' D' U B L R D2 L B");
            scrambles.push("F2 U2 B' U' D B2 F2 L' R2 U2 F2 D2 F2 R' F' R B' U2 B D F R' F2 U2 D");
            scrambles.push("D U B2 F2 R' U D2 B2 F' D B2 L' D R B2 U L2 F2 D U L' U2 R' F' U2");
            scrambles.push("L' F D' F L' F' R2 L U' L' U L2 U' L' R2 D2 U2 F2 D' B' U' L F2 U F'");
            scrambles.push("D U B' D L D' B2 D L' R2 F' D' F2 L' D' L2 D B D R' B' L2 R U D"); 
            scrambles.push("L' F' B L' F2 D' U' F2 B2 R2 F2 B2 R' F R L' F U B2 F' L2 B D2 L2 D2");
            scrambles.push("B2 F2 R2 F B U' F2 R2 U F2 R' D R2 F B' D2 F2 U' D' B' L2 D B D2 B2");
            scrambles.push("B L2 F U' D' F U2 F L' B' U B2 L U2 F D' B' R B2 R2 L2 B D B2 L2"); 
            scrambles.push("D B' R2 L D2 F B' U' B2 L2 F' L' F L' D' L R' D2 B D' U L2 F D2 L2");
            scrambles.push("F B L R U' L2 U D2 B F' D U F2 L2 B U2 L2 D2 B2 D2 L2 U' B2 D' U'"); 
            scrambles.push("D2 R' D' R2 U2 B' R' L2 U2 B2 L D2 L F U B2 D2 U L U2 B D2 B D2 R2");
            scrambles.push("U R L U R L U D F' U' D B' R' F2 U2 L R2 D' L2 U' R2 U' R D2 U");
            scrambles.push("F R B2 F U D2 R2 F' D2 R U' B F2 D F2 U2 D' L' F2 R' B2 R F' B L2"); 
            scrambles.push("L B' L D2 R D F' D R' L2 D' R L2 D' R2 B' U L U D F B2 D' F2 L'");
            scrambles.push("B L D R2 B2 L' B F2 R L2 D2 U F2 U2 R' B' L R U2 B D2 F' D U' R2"); 
            scrambles.push("D' U' F2 U' D2 B2 D R' U2 R U R B' F' R' U2 D R' F U2 D2 R F' R2 B'"); 
            scrambles.push("B F' L' D R' U' R' B F' U' L2 R' U F B U' D' R2 F D B' U L F B'");
            scrambles.push("R' F' L' R D2 L2 U B D B' L' R' B' F U2 D2 L R' B D' R U' B2 D' R'"); 
            scrambles.push("U2 D' L2 D' F2 B2 R F D2 U' F' L' R2 B' R U2 F' B2 U2 R B' F' U2 D' R'");
            scrambles.push("D2 U' L' B L2 D2 F2 U' D B D' F L2 B' F' L' R U2 B2 U F' R D' L2 B2");
            scrambles.push("B' R' F2 L' D' L' U2 B' U2 D L2 U' B' R U' D B' F L2 F2 R2 F2 B L2 F");
            scrambles.push("F2 L2 F2 R U' D L R B' L' F2 U F B' U' L2 R' F D' F2 L D R2 U B2"); 
            scrambles.push("L' U' B2 L F2 R' D B' F2 R' F2 R' F2 R B L2 B' F' U' D2 B2 L F L2 U");
            scrambles.push("L' D' F' B2 D' F L2 B D' B' R2 B' R2 B F' L' R' F' B' L' R2 B2 D2 U' F");
            break;
            
        case SCRAMBLE_TEST_SET_5:
            
            /* 500 loaded from https://ruwix.com/puzzle-scramble-generator/?type=rubiks-cube
                 via loadScramblesFromText.js to wrap prefix & postfix around scrambles
            */
            scrambles.push(`U L D2 R2 L B L2 R2 U' F D2 B2 F' D F L2 U2 F2 L B L2 F' U2 R B`);
            scrambles.push(`R B' L' D2 B L2 D' L R D2 R2 U' B R2 L2 B2 R2 B2 R' U' L2 B U' B2 R2`);
            scrambles.push(`D F2 L R D U' B2 R L2 B' R' B2 R B' R U' D2 F R2 D' F' D' L2 F' L'`);
            scrambles.push(`L2 F2 R B' F2 R2 F2 U2 D' R U' B L' F' D' B U F R' F' D2 F' D F R`);
            scrambles.push(`U2 R D' U' R2 L2 U' B' D L2 D B R2 U2 R2 B' U' L2 D2 F2 R2 D B2 L' B'`);
            scrambles.push(`L R' B' D' B2 F2 L R D2 U' L' D2 R F2 L F' R2 B2 R2 D2 R' D2 R2 D L`);
            scrambles.push(`B' F U2 D' L D' B R U F2 D2 L' U B2 L' B2 F L2 D B' F' R B' R F2`);
            scrambles.push(`F2 R' L F2 U L2 D2 B2 D L' R' U' R2 D F U2 L' U2 F2 B' U' L2 U L F'`);
            scrambles.push(`D' F2 D F U F L' F' L' B' U B R D F' U R' L2 B2 R2 D' B D B2 U'`);
            scrambles.push(`R D2 U B2 F2 D' L B L' D L' B F D F2 R D L F2 D' L' F L F2 R`);
            scrambles.push(`F L2 F2 U B2 F U2 F B U L2 U F' L2 F' R U' L2 U' F2 R F' D U' F`);
            scrambles.push(`B' F L B' U' D' L2 D B D' F L' F B' R' B2 F U2 B2 U D B R2 F2 L2`);
            scrambles.push(`D F U2 B2 R2 D' L' U' L B R2 B2 L2 D2 B L2 D' B2 R D L' R2 U' R2 F`);
            scrambles.push(`B U2 D' F D B2 U F2 U' B' R' D' L' R2 U2 F2 L B D R2 B2 F' R' U2 L`);
            scrambles.push(`D F2 L' D' L' D2 L F2 U L2 R' U L' B' R U2 R2 U2 R2 U' B2 D L2 B2 L2`);
            scrambles.push(`D F2 L' D F R2 B2 U' B' U' L' U F D' U L2 F' U D F' B2 U2 D2 B2 L2`);
            scrambles.push(`L B2 U' R' U D' F2 B R' B2 D U' L F' R' B' L B2 D' U F D L' R B2`);
            scrambles.push(`F' L' F R' B2 F2 U D2 L2 R' B D2 R D L' U' D2 L2 D' U' R2 D2 F' B' U2`);
            scrambles.push(`R' B2 R2 L' F L R2 F2 L F2 R' D2 B' L' U2 D' L' U D' B L2 R' U2 D L'`);
            scrambles.push(`L U2 F' B R' L2 F B2 U' B F U2 B' L' D' R L2 D' R D' L B L2 D' U2`);
            scrambles.push(`U B2 F U' F L2 D2 U L2 D L R2 D' L' U F2 B L R' U' F' D' R B U'`);
            scrambles.push(`L' R D2 U2 F R D' L F B2 D' R' B R2 B2 D' R' F' L F2 L' B' R U2 L'`);
            scrambles.push(`U B' F D' B' R D2 U' L2 U2 R2 F' D F' R2 F2 L R2 U2 R2 D' R2 D U B`);
            scrambles.push(`U2 F' D' B' F' R' F U' L F2 D U R' B F' L U' B D' B R' L B2 R' D`);
            scrambles.push(`L2 B' L' D' L F L R2 F R2 U2 D B D L' U B2 L2 D' U F U' D2 L' F`);
            scrambles.push(`D2 U2 L2 D' L2 D' U2 B2 D L F2 R2 B F L U D2 R U L2 F2 U' F D2 U2`);
            scrambles.push(`L' R2 D R' U' D2 L' R F R' F2 R2 L F L' D L2 U' B D2 R2 B L2 D F'`);
            scrambles.push(`U L' R2 F' R' F R B' R F' D' L' U2 L2 B D R2 D2 L2 R' B' F2 L B2 F'`);
            scrambles.push(`F' R2 F' D2 L' R' F2 B2 U2 F R2 L2 D2 R2 U R2 D R F2 U' L' D2 R D L2`);
            scrambles.push(`L D2 R B R B U2 R' F B U' F2 B U' B L R U2 R' U2 B R' D2 L' D2`);
            scrambles.push(`R L U2 L' F' U' D L2 F R' U' R B' L2 D' B' L' F U' L2 D' F2 U F B'`);
            scrambles.push(`L' U' L R2 F2 R' L2 U D2 F L' F' L R' B2 D2 R' L' B U' B D2 B' D2 B'`);
            scrambles.push(`R' B2 D L' D2 U' B F2 D U' B2 R D U R B2 U2 B' F R2 U' F R2 U D`);
            scrambles.push(`B' F D U R2 U2 L' U2 R F' B2 D F' R' B2 R L' D2 L2 D2 U' R B R' B2`);
            scrambles.push(`R L2 D' B D2 B2 D2 B F' R' L U R U' B2 U L' F U F' U R2 D2 R B2`);
            scrambles.push(`F2 L B L U B D2 U2 F' U' R L' B2 U2 D B2 U' R2 F2 U' D' F2 L B D'`);
            scrambles.push(`F B2 U' B2 L2 B2 R B' L U2 L' U2 D2 B R2 U L2 U2 F' B2 R' B' R' B2 U'`);
            scrambles.push(`U2 F' L F U2 D' F' D2 L2 U2 B2 L F' D' B F R D2 F U' F' B' R L2 U`);
            scrambles.push(`B2 F2 D2 L' F2 L2 B2 U2 F' L2 D2 B R' L U2 L U2 D B' U B2 F U' D B'`);
            scrambles.push(`L2 U2 D' B F' L2 D L2 U R' U' F B' R D2 U' L B' D L B D' L R2 F2`);
            scrambles.push(`B' D F2 D' R2 B L' D' L' U' B' F U2 L F B2 L2 B2 F2 L B2 R2 L U D`);
            scrambles.push(`F' U' R2 U' L U' D' F2 R2 U2 F2 U2 B F R U' L' R' U' F' B2 D2 L' F2 U`);
            scrambles.push(`D' F L2 D2 L' F L2 R F2 D' B' D2 R' B2 L' R' B2 L' D B' R2 D' R U' L'`);
            scrambles.push(`U L2 U' B2 D R' B L2 R2 F L U R2 D2 U2 B2 U' R2 F' U2 B L' D L2 F`);
            scrambles.push(`F2 R B2 U' B U' F B2 R' D2 F D L' U' D B' U2 L R2 U' F' U2 L2 D' L'`);
            scrambles.push(`D R D B2 R B2 F' U F D2 B2 F2 R2 B' U2 F B' L2 U B2 R' D B D F`);
            scrambles.push(`U2 R2 D2 L D' R B2 U2 R' B U2 D2 B2 F2 D2 L2 F' R D' L2 D R2 U R F`);
            scrambles.push(`R' L F2 L U B2 R' U2 F R2 U2 D R' B D U' F2 R' F D' U B' R2 D2 B'`);
            scrambles.push(`D' L2 B L2 B' U' L' B' L U' L2 B D F2 L2 U F D L2 D2 L' U B2 R2 B`);
            scrambles.push(`B' D F2 D2 B R B' L R B' D' R2 D2 R2 U F2 R D2 R2 U2 L' D' U R2 B2`);
            scrambles.push(`U F B2 D F' R B U' B R2 D2 B' U2 F2 R2 F R B L2 U' R B2 U L B`);
            scrambles.push(`F L' F R' L U F U' F B2 D2 L2 R F R2 L2 U2 F2 B L F2 U' R' U' R2`);
            scrambles.push(`F' D' F2 D' L' D B R' L' F2 R' B2 D2 R D B' R B' D' B2 D2 F R' D U2`);
            scrambles.push(`L' F U' B L D2 L U2 B L D R F2 B D2 F' B R' U' L' B D2 B2 L R`);
            scrambles.push(`R' B D U L U B2 R U' D2 L U' R' D' U' R2 L D F B' L' B F2 R U2`);
            scrambles.push(`L2 R' F D2 B' D F' L2 B' D2 F' U2 D2 L' D2 L' U' D2 R' F2 D' L2 F' D L2`);
            scrambles.push(`B2 F R U' B R2 L2 B R2 U B L B R' D B' L D' F2 D' R2 L F2 U2 R`);
            scrambles.push(`U' L' U2 L' U2 R U2 B' D B2 D' U' L R' B' D' L' B2 L D' B2 L' F2 R' D`);
            scrambles.push(`U2 D' R' L' U2 B D2 R U L' D' F2 D2 F B2 L' B' F D2 U' L' B2 D' L U'`);
            scrambles.push(`F2 R' U2 L F2 L B F L' B2 L2 U2 L' R' B U' D' B2 L2 F2 B' L U' L D`);
            scrambles.push(`F' B U D2 F' U2 B2 D' L' F B R U' D F2 R D F' D' U F2 D2 L F' B2`);
            scrambles.push(`L F2 L2 U L R2 D' U L' F' R2 U2 D' L D' U' F D2 B2 L' R' U' F2 B' U'`);
            scrambles.push(`F' L F U R U2 L D2 L U2 B' F' R' L D R' D R D' R' U' B' R D U`);
            scrambles.push(`D2 L' D U2 L' F2 D B U2 R2 L' D2 B' U' F2 R' F U D' L D' R B U F2`);
            scrambles.push(`L2 F R' L2 D R2 D' L' B U F' R L F2 D B' L2 U L B F D' L2 F' R`);
            scrambles.push(`R2 D F' R' F2 L2 R U R D2 F2 L' D' U R L2 U B' F' R D' U' L2 U' F`);
            scrambles.push(`F2 D U' F2 B2 U F U' D L' B2 F' D' U R' L' U2 R D' U' F2 U2 D' L B2`);
            scrambles.push(`B U' R2 B' U F2 D' R L U' R' D2 B2 L' B R' B' R2 U2 F2 D2 R D2 R U2`);
            scrambles.push(`L F L U' D L2 D U' L2 R2 D2 U R' L B2 F' L2 U R B' U' D2 L' R2 D`);
            scrambles.push(`U F R' L2 F D U' B R D2 B2 D2 U' R2 U F2 U' B2 R U2 D' B2 L D' L2`);
            scrambles.push(`F L U' R2 U2 F L2 F L F2 D L F' L R2 U' F B2 D' R' D U2 B' F2 D2`);
            scrambles.push(`B2 U L R2 D F D L2 B' F' L' U F2 B2 R2 F' L2 D' F U L2 D2 U2 F' B'`);
            scrambles.push(`F D2 U2 F2 B D2 B F2 D U2 R D U' L2 D F U' R' U2 F2 L B U' L' F2`);
            scrambles.push(`F2 L2 B' L U' F D2 R2 B' L F2 B' D2 R2 U D' R' B' L' U D F B U' D2`);
            scrambles.push(`U F' U' D' L F D2 R2 U B' L' B D B2 F' D2 L R2 D2 U F L2 U' R F'`);
            scrambles.push(`F' D' R' B D' R D2 F' U2 F' R2 F2 R F2 L D L2 D' L' F' R D2 R' B' U2`);
            scrambles.push(`F L2 U B' F' U2 L' B L' D R' D2 B F2 U2 F2 L' F2 U2 L R2 U R2 B R'`);
            scrambles.push(`L U2 D2 L2 F D2 F2 B2 U' B' L U' F L2 D2 R D2 R B U L2 R2 D' R U'`);
            scrambles.push(`B' R U2 L2 B' F' U D' F' L2 U2 F' L' F2 U' L R B2 L' B U D' B2 F' L`);
            scrambles.push(`F D R F2 D2 B' R2 U2 R L2 B' R2 B R L' D2 R2 F' U B U R F D2 R`);
            scrambles.push(`U R2 L2 F2 B' L' D2 L2 F' L2 R D2 F B R' B2 F' U2 B U R2 U' F2 D2 L'`);
            scrambles.push(`L2 U R D L' B F2 L2 D2 F' R2 B' F2 D' R' L2 F2 L' D' B' D L R U' R`);
            scrambles.push(`L B' D R2 U B L2 B' R L2 F2 R2 F' D' L2 B2 R' U2 R2 F B2 U2 B D' L2`);
            scrambles.push(`B D2 R L D R2 F2 R' D2 F' B2 D U F' B' U R' U2 R2 B2 R F L2 D F'`);
            scrambles.push(`F2 R' F U2 F R2 L2 F2 R2 U' B2 L2 D2 R B F U2 R' B' D2 F2 D2 B2 F R'`);
            scrambles.push(`L' R2 D2 L' B' F U D' R2 U2 D2 B D' L' F2 D U2 F U2 F2 R' B' F D' F'`);
            scrambles.push(`D' L2 F B' R2 L' F2 L D2 F D' R2 U' L2 U' D' R D2 L2 U2 D2 B2 D' R' L`);
            scrambles.push(`F' L2 U2 R B L' R B' D L B R2 U D2 B' L2 U D' F2 D F2 L2 B U L2`);
            scrambles.push(`F B' R' B' D L2 B R F D L2 B2 R' D R' B2 D B2 R' F' L' U B U' L`);
            scrambles.push(`U2 R' F' B D' L' U' L U2 F' B2 R' U' B2 F' D' B R' B2 F R' B2 D2 B2 U'`);
            scrambles.push(`R D F2 L' R' U' B2 L F' U2 R2 U2 F2 U B' F' L' R2 B' L R B L2 B2 U2`);
            scrambles.push(`L2 R2 D2 B2 R2 L U' F2 B D B2 F U2 L B F' D2 L2 F U2 R2 L2 B L' F'`);
            scrambles.push(`B2 L D L' U' F' L2 F2 R2 L2 F U D' F' L' D L2 B' F' R2 B2 F' L' R U'`);
            scrambles.push(`D2 L D' B' R' F D' L2 R F2 B R' L2 U' F R2 D' L' F' L2 U' R B' U2 D`);
            scrambles.push(`F L2 R U' F U B F R' B U D' L' R' B2 F D2 B' L' B' U' F' R' F' B2`);
            scrambles.push(`D U B F' L F D' F' R2 B' R2 F' R2 U2 R2 L' D U R L' B' R' F2 U' B'`);
            scrambles.push(`U2 F2 R U D R2 D R2 F B2 U F2 D2 F D' L' U' F2 B' R B2 D2 R' F U`);
            scrambles.push(`F2 D2 B2 U2 R L' D' L U B' U' R' D' B2 D' R2 F' U' R F' U L' F U2 D2`);
            scrambles.push(`L2 D F' L2 F2 U R2 B F D B D L2 B' D R F2 D L2 D' F' D2 L2 U' D'`);
            scrambles.push(`B2 D2 R F' D2 U2 L D2 R2 L2 B2 F' L2 B2 L' U2 F2 D2 B' R B2 L F' U L'`);
            scrambles.push(`D' B' R' D U2 L' R' D' U' B2 F D2 B' L2 D F B' D2 F2 U2 B D2 L2 F L`);
            scrambles.push(`F B' L R F2 D' B2 D2 L2 F L2 R' D F' L2 F L' R' F' B' D' L U' D F`);
            scrambles.push(`B2 F2 L' D2 U R' B R2 B2 R D' L F2 U' R' B2 U2 F2 L B2 L R F' R' F'`);
            scrambles.push(`L U2 F2 L D B F2 L U' D2 L' B F U' R2 F2 B2 D2 U2 L' B' F U B L'`);
            scrambles.push(`R2 U' L2 U' D2 L2 R U2 L R2 U' L R' U' R U2 L2 R' D F' L' U2 R F' R2`);
            scrambles.push(`U B D2 U' L B' D2 B F U2 F' R' U' B' U' F' B2 U R2 D' U2 F L2 F D`);
            scrambles.push(`R' B R' F R B2 R' D B2 U' B' L B' D R2 U D' R D' U F R U2 D2 F`);
            scrambles.push(`F R2 L' F' L' U2 L' R2 B D L' R D2 F' U' L' B2 D F B' U2 R2 U' D2 F2`);
            scrambles.push(`F L' F' B' R2 F' B' L' F2 D' B2 U' L U2 D' L F' D F B L2 D' B2 F' U2`);
            scrambles.push(`U2 F R D' F2 U2 L B2 D' R F' U' L' U2 R D2 B U2 R' F' B2 R2 F' B D'`);
            scrambles.push(`L B2 L' F B2 L' U2 L F R' F2 B2 L R U2 B2 D2 R' U F' R' B' L' F L'`);
            scrambles.push(`D' L' D2 U B F2 D' F L' B' F R2 B2 U2 D' R D B R L' F2 R' B2 D2 U2`);
            scrambles.push(`L2 D R B' R' D' F' R' F D2 L2 R' U L2 U' D2 R2 L' B' U2 F L2 D' F' R`);
            scrambles.push(`D2 R2 F D' U B F2 D U R B' U2 B U2 D B D L R B' U2 L2 B R2 F'`);
            scrambles.push(`R L' B2 R' D U B F' L2 R F2 L F R' D' L R2 B2 U B2 U' L2 R2 B' D`);
            scrambles.push(`B' U' B2 L U D' B' D2 L' R2 D2 L' B' D B D' F U2 F L' R' F2 B U2 D'`);
            scrambles.push(`L2 D U' F' L2 B' L2 D' U' B2 F2 U' B2 D' L D2 U F' D F R2 L2 D' U R'`);
            scrambles.push(`F2 U B' U2 D' L' U D F2 L2 B U R' U' B' D L' B2 F L' U2 D' B2 U L'`);
            scrambles.push(`D2 F R' B' D' L F2 B U2 R2 L' B2 D U R L' B2 U' L U2 F' R' L2 D U2`);
            scrambles.push(`U2 R' L F' B R' L U' F' R2 B2 R2 D2 L2 B D R L B R2 F R2 B U F'`);
            scrambles.push(`R2 F' U2 B F2 L' D2 U' B' D2 L' B2 R' L D2 R' B' D2 R' F' L D2 F D' R`);
            scrambles.push(`L F2 B D U' L2 U2 L' B D2 R' U2 D' L' B' F' U' D' B2 F D' B F R2 L`);
            scrambles.push(`L' R' U' F2 D2 L U' B' L F' D2 B' L2 D' F' U' B2 F2 L' D U2 R' D F2 U'`);
            scrambles.push(`U' R' D2 L2 B' U2 D' F2 L' R F2 L2 F2 D' U L2 D' U2 B D L2 U' F2 U2 L2`);
            scrambles.push(`B' D' R2 F' B2 L D' R2 L2 B R B F2 D L R' U' D2 R D2 L2 B2 R B U`);
            scrambles.push(`L' D' L F' B D2 F' L U D2 L' B D' F R' D' F R' U2 L B R' F U2 D`);
            scrambles.push(`R B D' L U D' B' D' L R2 U' R D2 R D2 L2 U D2 L B' R' B' L B2 U2`);
            scrambles.push(`F' U2 L' U2 R2 F D L' R' U F' U' F' U2 D2 B2 R' F' B R D2 L B2 L' U'`);
            scrambles.push(`F' B2 R2 L2 D' R2 L' D B D' L2 R2 U' B D2 B' D' F' U2 R2 L' U' F2 U2 D2`);
            scrambles.push(`D L F' L' D F U2 D' L' D' B U2 F' L' B F' D' R F' L U D2 R' D' L`);
            scrambles.push(`F U R' B2 R U D2 R2 U D' B L' R2 B' U R' L B2 D F' B2 L2 B R' D2`);
            scrambles.push(`U2 F2 B2 D2 U B2 U2 R' U B2 F L' U2 D2 B2 R' B D' U2 R' L D2 R2 U R'`);
            scrambles.push(`D' L2 B2 U2 F2 L2 D L B R' D B D U' R2 L' U2 R2 F2 D2 R L2 B' U2 L`);
            scrambles.push(`L B' U L2 B F' D' F2 L' F' B' D U' L2 B' R U' F2 R U' L F D2 B2 F`);
            scrambles.push(`L' U' F2 R F' L2 R B2 U R' L U2 D' F' B U2 F2 R' F B D' B2 U2 B F`);
            scrambles.push(`U' D' B2 D' U2 B2 R L2 F U2 D2 F2 D' L2 U L F' B2 R D' B R' D' U B2`);
            scrambles.push(`D R2 F2 U2 L2 D U L2 B D L B' F2 D2 U' L F' D L U L D' R' D' L`);
            scrambles.push(`U2 D2 F R2 F2 U2 B U' F' U' F D' B2 R L' F' B2 U D' L2 D' U' L F2 R`);
            scrambles.push(`D' B F U' L B2 U B L U L U2 L U2 R' L' D' U' L R' D' B R D F'`);
            scrambles.push(`D' U' F2 L2 F U' B' F2 U' B D' U L2 R' F2 L B' R U2 D2 F' R U2 F' R'`);
            scrambles.push(`R2 F2 U L D2 L' U' B' D F' D2 R' L U F2 R' L' D B2 U2 R2 U' F U' L`);
            scrambles.push(`L2 U F2 D' U' R U2 F2 B' L2 F2 U' F2 L' U' D2 L U2 B D' F2 R U R' U2`);
            scrambles.push(`U' L B' F2 L D R U D L2 D2 R L2 U2 L2 R D2 F2 R B' R2 B L2 F2 U'`);
            scrambles.push(`B2 R2 D' U' B L2 B2 L' B R F U B' F U2 B' U2 D L2 U' D L' R B' D'`);
            scrambles.push(`L' R' B D' R2 L' F D' B L' F2 B' U2 D L2 F2 B D2 U' F2 B' R2 D' L' F2`);
            scrambles.push(`R2 F2 R' U2 F2 U2 B R B U2 L D U2 B L D2 U R B F' U F2 R' L D2`);
            scrambles.push(`F2 L R D' F' B' R L' B' R2 D F2 R F2 B2 L U L2 B U2 D2 F2 U B2 R2`);
            scrambles.push(`R' B D U' B' F' R' L2 U2 B F' L U R2 D U2 R' F2 R2 U F L U2 F' L`);
            scrambles.push(`D2 B' F' D F' D2 F L2 F L' D2 L' D2 F2 B R2 L2 D' U R' U2 R' B L2 U`);
            scrambles.push(`L2 B' F' D' B D' U' L' R B U2 R L D' U F2 R' B F2 L U' D' L B2 F2`);
            scrambles.push(`U' L U2 D B2 R' U' F' R F' D2 R' L B2 R U D2 R' D' L2 U D2 B' D2 F'`);
            scrambles.push(`R' D' L2 B' D2 L' B2 R2 U' R F L2 D2 U B F D F' B2 R2 L' F B2 L' R`);
            scrambles.push(`B2 F' U L D' U L2 B D' B L U' F' D F2 U2 R2 F U' B F' L' F B' U2`);
            scrambles.push(`R' L D' B U B' L B2 U B' L' F L2 F2 U' F L2 U' R' U' L2 U2 D' B' R'`);
            scrambles.push(`L' R U' D B2 L D' B F2 D L F R2 F' R2 B' D' L' B2 L U L2 D' R B2`);
            scrambles.push(`R F' U B' U' R L2 U B F' U2 B U' R' D' U' F' B2 U2 R2 U L2 D' R2 B2`);
            scrambles.push(`R B2 F2 D U R B D R D F L' D' L' D U B2 U' D B U' D2 R2 L F`);
            scrambles.push(`L' F L2 F2 L R2 U R' U2 B2 R U2 B2 F' U R2 F2 R' U B2 U' L2 F' D2 B`);
            scrambles.push(`D R2 L' F2 B2 D F' U B' R2 B' F' R' U B' D2 L2 R2 U2 D L2 U' D2 B L'`);
            scrambles.push(`U' R L D R2 U' D' L R2 B U F2 B R2 F2 L' F' L U F2 L2 B' R U2 F'`);
            scrambles.push(`L2 U' L D2 U' B L2 B' L' D' B U2 R' F R2 U2 L' D' B2 L B' D R2 U' R`);
            scrambles.push(`D' R2 L D U2 R' D R2 D' R2 B2 L' F2 L' R2 F B2 D U L2 R' U' B2 U L'`);
            scrambles.push(`F2 B' U2 R2 B R2 B' U R2 U' D' R B D' B' R F' L2 F2 D2 U' L D2 U F`);
            scrambles.push(`D' L2 F D2 B2 F2 D B' F' D' B' R' F D' R' U2 F R2 U' F2 B' R F' L' F`);
            scrambles.push(`U L B' D' F2 R2 F D2 L U' L2 U F' R D2 B2 R D F2 D' U R2 U' L F2`);
            scrambles.push(`F B L' B2 F2 R2 B' U' L2 F2 R L D L' D2 U2 L' U2 F L' U' B2 D' U2 F`);
            scrambles.push(`U L D2 U L U D2 B' R L D' U' F2 L' D2 B' D2 R2 F R2 U B R L U'`);
            scrambles.push(`B' F' D L2 F2 L2 U R F D2 F2 U D2 L2 U D2 L D U2 F2 R' F L R U`);
            scrambles.push(`U' D' R' L2 B D2 L2 D2 R' D U2 B2 F' R F' L' F' D2 F U' R2 D2 R' L B`);
            scrambles.push(`R2 B L2 B' F D' U L' D U' B2 U2 B2 U' L' R2 U' F' U2 F D L2 U B2 D`);
            scrambles.push(`U2 B2 L U' L2 D R U B F D R' F2 D2 R2 U2 D B' F' U D' R2 F' B L`);
            scrambles.push(`F B' D2 U2 B' D2 B2 L2 D B2 L U B2 L B' L' D' R2 U' R' L' F R2 L' F'`);
            scrambles.push(`R2 U2 D' B2 F D' R' F B' L F2 D' R L' F' D2 R' B' U D' B2 L' F' D R`);
            scrambles.push(`R' B D' U2 R B D F2 R F L' B' U' D2 L2 R B R' U B' L' R' B2 L' R2`);
            scrambles.push(`L2 B R F' U R2 L' D' R' U D R' U2 F R2 L2 D2 F R' B2 L D' R2 D' U`);
            scrambles.push(`L2 F' D U' F2 B' D' B2 D' L U' L D' L D' L U R2 B' U2 B F2 D R' L'`);
            scrambles.push(`L R2 F' R U2 B' U2 B L D U2 L2 U' R2 U F D2 R2 B' L D2 B' R2 L' F'`);
            scrambles.push(`L' U B' L2 R2 F2 R F' U2 L2 B F R' B2 U' D' R L' F' D2 L' B L2 U F`);
            scrambles.push(`B' U' F2 U' B' L2 R B2 D' L2 D' U' R' L2 D2 R B R U2 D B' U B R' D2`);
            scrambles.push(`D U2 B' F' U' D' F R L' U2 F2 U' D' F' D F2 L2 F2 U R' L' U R2 D2 R`);
            scrambles.push(`F2 R U' D' F' B2 U' L' B2 D L2 D' L B' F2 D2 L D B2 R2 U2 B2 R L F2`);
            scrambles.push(`B U' L U' F R L2 B' F U F D B D2 F U2 R2 D' F B R2 L F' U2 F2`);
            scrambles.push(`F' B R L2 F2 B L' F' B' U L' R' F2 U L2 U' F B' R' D R' L D' L B2`);
            scrambles.push(`F' U B2 F2 D' L' R2 U2 F U2 D2 R B' U' F' B' L' U' D2 F2 L2 D2 B2 F' R2`);
            scrambles.push(`U2 L2 R2 B2 U2 B F2 D' U' R' D' L2 R U' R2 U2 F U2 L' R B2 F R2 U' F'`);
            scrambles.push(`L2 R2 U' R B' F2 D U' B' D' R' D' B2 R' F2 R2 L2 U2 F' D2 B' F2 D2 L U2`);
            scrambles.push(`B' D' L' D' R D2 U F D R' L2 D2 F' D2 L2 B2 U2 B2 F2 U2 L' D2 R B' L'`);
            scrambles.push(`F2 D B' D2 B2 R F' R2 U2 L2 U2 R B2 L' B D2 B L' R U B' F' R2 F' R2`);
            scrambles.push(`B F2 D' U2 B2 F R2 L2 U2 B2 L2 B L' B2 F' U2 B D L2 R B' U F' D2 U'`);
            scrambles.push(`R2 D R L F U R F' L F2 R2 B' L2 U L F U' R2 B2 F2 U2 B U2 D2 R2`);
            scrambles.push(`R2 U' D' L R2 D2 U' B' L R2 F' L' U' L F' D U' B2 D F2 L U2 L U' L'`);
            scrambles.push(`B U2 F R' D B2 D B2 D' R2 D2 U F L2 R2 F' B U2 F' D' R2 L2 D2 B2 U'`);
            scrambles.push(`B D' B' D2 U R2 F2 D2 B2 R2 B' D2 F2 R B R' F' D R' U' D' F2 R' B2 L`);
            scrambles.push(`D2 B2 D2 U L2 B2 F' U' B R F2 R L2 D' L' D' B2 L2 B D B2 U2 D' L' R'`);
            scrambles.push(`B' F D R2 B' R' F' L' B2 U2 L' F D R D2 F' D' F' D2 R2 U2 F' D' L U'`);
            scrambles.push(`B2 R2 B' D2 L F' D2 U' F' U' D' B' F' R2 D L2 D' U2 F' B2 U' D F' L2 R'`);
            scrambles.push(`R' D' R2 L D' U2 R' F2 L R F2 U2 F2 U F2 L' F2 U B R B2 F2 U' D F'`);
            scrambles.push(`B R2 L' D' R B2 R2 U2 D' L F' U' B' U' F2 U F2 L F L' B U B' F' R'`);
            scrambles.push(`U' B' D2 R2 L' U B' L' U F2 U R2 F2 B R2 B' F' L2 U F D L' U' D' R`);
            scrambles.push(`U B' D' B' L U2 B' D2 R D L' B' R L2 U' R D' B D L2 B2 R' F2 U' R2`);
            scrambles.push(`B' L R' D' L' F L B2 D' U2 B2 U2 L' R' U' D F D' F2 B' R2 F2 D' B2 F2`);
            scrambles.push(`U' F' B2 D L' D2 R' F L' B L2 R2 D2 R2 B2 R2 F' D' B R2 D F D B D2`);
            scrambles.push(`B L D' B R U2 F2 U2 B F R' L D' F2 D2 F2 R' D F2 D2 F' B2 D' R F2`);
            scrambles.push(`B F D2 B2 U F B U F2 D2 L2 B U' B2 U L' U F R' U F2 L' R2 F' D`);
            scrambles.push(`L F' R U' R2 B F R U' F B' R L U L' F2 U' F2 R' U' B2 D F B D'`);
            scrambles.push(`L' R' F2 B R' B2 U B2 D2 F2 L' F2 U2 B2 D2 B' L2 B2 R2 D2 F' D F' D2 F'`);
            scrambles.push(`R' D2 U2 B2 R F' D2 F R' U2 D' F' U L' R F' R' D2 B D L2 F' L' R2 B2`);
            scrambles.push(`U R L' U2 R' U D2 B2 L' B' U2 R' F2 B U R2 D' F2 L' D2 L2 F U' R2 B`);
            scrambles.push(`R2 F R2 L D B' L R' B2 R2 U2 L D2 R B U R L' B2 F' D' U F' D' L2`);
            scrambles.push(`B2 U2 D B2 R2 L' D L D2 F D F' L' D' F U R' B' D2 U' B' L' R' D2 U2`);
            scrambles.push(`D L' R D L' B U F R2 L' U2 D' L D' F U' L' R U' D R B D' U' F`);
            scrambles.push(`D F' R F2 D B2 U F2 B' U2 D' L B U F2 R L' B' F' L2 F D' L R F2`);
            scrambles.push(`L' B D' R2 D' L B2 U' B2 R2 U L' F2 R2 L2 U' F U' F' R D L2 D2 U' B'`);
            scrambles.push(`U R L B F L2 R F2 L F' D F2 R2 B' D' U' B' L R2 U2 L2 R B' D R'`);
            scrambles.push(`B U' B2 U' F' D U F2 R2 L D2 R L' F U2 R B' U D' L F2 L F2 U B'`);
            scrambles.push(`D2 R2 U B U' B2 L F' B2 D2 F L' R' U B' R D2 B2 R' U' B U B' L D'`);
            scrambles.push(`F2 R2 F' U F2 D2 U2 B2 D2 L' F R2 B F R' F2 B' D2 L2 U B2 D' F B R`);
            scrambles.push(`B U B2 U B2 F R2 D' U2 F2 R2 L2 U2 B L D' L2 B' F D' F' U D2 L' B'`);
            scrambles.push(`D2 R B' F' U B' L' U2 B2 F L U F U2 F L' U' R' D L' R' B' L D' F`);
            scrambles.push(`L2 F' B D2 U2 R' U' R' D F R L2 U' L' F U F2 D' R' F' D R U F2 R`);
            scrambles.push(`L2 R2 F R' B D' R' B L2 D2 F' U' R2 F2 R L2 F U' L R' B' D' F D2 R`);
            scrambles.push(`F U B' R' U B D U' F' R2 L F' D L2 R2 B U2 L2 D' L2 D2 U R2 B D`);
            scrambles.push(`U B2 L' U2 L U F L' R U' R L' D F U2 L2 U' R U F U' B' F R B2`);
            scrambles.push(`B2 D' U2 B2 U2 B L R2 B2 R D F2 U' D R' U2 F' B D2 U2 B2 U F' R2 L'`);
            scrambles.push(`U' L2 R' D' U' R' L' D B2 D2 R B L B2 U' D F2 U' R2 D F2 B2 L2 D2 U2`);
            scrambles.push(`D F' D2 B2 L2 D' R2 D' B' F U2 F' U L' B U2 L' F2 U D2 L F2 R2 F' D2`);
            scrambles.push(`D2 U2 B U' R2 L2 B2 R2 B D' L2 B2 U2 B' L' U L2 R U' L U B2 R2 F2 D`);
            scrambles.push(`F R2 B F U R' L2 U2 L' R2 F2 U' F R2 L F' U2 D2 B2 F2 R' B' U2 L2 R2`);
            scrambles.push(`R2 L2 U2 B' D2 U2 F2 L B U L F' U R2 U2 D L F' U2 R2 D L B2 L' D2`);
            scrambles.push(`L' B' R2 B2 L2 F2 L D R' U2 B U B' D R2 F2 D' F2 R F U' L2 F D' U2`);
            scrambles.push(`F' R' F2 R' B' L2 U2 R F2 L' B' L' U2 L B' D B2 F2 U L R' B2 U' D2 F`);
            scrambles.push(`L R' D' R B2 D2 L2 R2 F U2 F2 B2 D2 F' B U2 B' U2 D' R' F U B F2 D'`);
            scrambles.push(`D U R' D' F' R' L D U' R2 F R' F2 R L2 D' R2 B' U' F2 B' U' D' F2 L`);
            scrambles.push(`F2 B D F R2 U2 L B' U2 R' F2 D' F' L' R2 U2 F2 D' R2 U B' R' B' D L'`);
            scrambles.push(`B' L D2 L U2 D' R2 F2 L2 B' F D2 R2 B' L' R2 F D' R2 L' D2 F D' B2 F'`);
            scrambles.push(`D R D U' L' R B R B L2 B D L U2 L F' L' D' L' D R' D' F U' R`);
            scrambles.push(`B2 R F' B' U B2 D' L2 F2 U2 B U D2 R2 B' L2 R F L' F2 U' L' F D2 U'`);
            scrambles.push(`D F2 B2 U2 D2 R' U2 D2 L' D' U' R B' L2 D2 U' F D L2 B2 U D2 F' D' R`);
            scrambles.push(`U2 L U F2 D2 R U R F R' L2 B' L2 U' L R' U B2 R L' B2 L F B2 R2`);
            scrambles.push(`D U L D L2 D' L2 D' L D B2 D' U2 B L2 F2 R2 B U' L B' F' L' F R2`);
            scrambles.push(`L2 R F' D2 F' L2 R' U' R' B D L2 F B2 R B R' B D F2 D B F2 U2 F'`);
            scrambles.push(`R' L2 U L' D' R2 D' U B' R' U D' L' F B D2 F L2 D2 B' D' R' F D' R'`);
            scrambles.push(`U2 D' B' D' F' R2 B2 D U2 R' U B2 L' R' U2 F2 L B' R D' L B2 U F' U'`);
            scrambles.push(`L' F' L B2 L R2 B' U F2 U2 L2 U2 F' U B2 D' B U' B' U2 B R' L2 F' U'`);
            scrambles.push(`F U D B' D U2 B2 U' F' L' D2 B D' L2 B2 L' D2 F U2 F2 B' L D2 F2 D2`);
            scrambles.push(`F2 U2 B U' R2 D2 L2 U' D' L R2 D' R B U L' U R' L D' F2 L2 D U' R2`);
            scrambles.push(`F2 L2 D B2 D B D U2 F R2 D L2 U R' B' U' B' D' F' L R F R' F D`);
            scrambles.push(`R L2 B U2 B2 R' F' B U' B2 R' B2 L2 U L' U' D' R F L' B' L R D' B`);
            scrambles.push(`L' R' D U B' R' D' U2 F B' L' D' R2 D R2 U' R2 F L' B2 D' F L2 B' L'`);
            scrambles.push(`B2 U2 B' R' L' U2 F R2 B2 R L' D2 F' D2 B L U F2 U B2 L U' B2 L2 R2`);
            scrambles.push(`L' B' D' B2 U' F2 D2 L2 U F2 U F2 L' B' R B' F R L B' F2 L D' U2 L2`);
            scrambles.push(`L2 D2 R2 U2 R2 F2 R' U2 D B2 F U R' D2 F' D2 L B' R2 D B' U' D F2 L'`);
            scrambles.push(`D L' R2 U' F' L2 D' F' B2 D B2 D2 F' L' U L R' B2 D' B D' F' B' R' F2`);
            scrambles.push(`U2 R U2 D' F2 R' U' F2 L D' U' L R' F B2 U2 L2 R D2 B' L2 D' U' R L`);
            scrambles.push(`L D B2 L2 D2 B' L' F' D2 B2 L2 R U2 F' D2 F L2 F' U' F2 L D R2 B D'`);
            scrambles.push(`B2 U B' U L' B' D2 F2 R D' U2 R B2 R2 D2 R2 U R2 B F2 R' U D2 F L'`);
            scrambles.push(`B F' L2 U2 F D' R2 D R' F2 L D L B U' B2 R' U' F' D2 F' U' B2 F2 U'`);
            scrambles.push(`R B2 D F' L2 F2 U2 L D' B2 L2 D2 R L' B F' U' D' B L' D B' F2 L2 D2`);
            scrambles.push(`B' D L2 F D' B U' R2 U F2 R' B' D' R2 U' L R' F' R L2 B2 D' B2 D2 F'`);
            scrambles.push(`R' F U2 F' U' B' U' B2 L' D2 R' F2 U F' B' U2 B' L' B2 L U' R' D2 R' D`);
            scrambles.push(`F2 D' B L' B U2 B2 L' D B2 D' F2 U B R2 F' B' L' F L2 D' B2 D' B2 D2`);
            scrambles.push(`L2 R2 U L' R F D' B' D F L2 D L2 B L2 F' R2 U F' R' F2 B R B2 F2`);
            scrambles.push(`R' B2 F2 L' F2 U F' D2 R D2 U2 B R F' B2 R' D2 F U' D' R2 U2 L U' L`);
            scrambles.push(`B2 D2 F' L R2 B2 R F D L U D' F' U' L D F B R U D2 B U B F`);
            scrambles.push(`U D' F2 L B2 L F2 B' U' R2 B2 F' D2 F2 D2 B2 U' F' L2 R' F' U B2 R F'`);
            scrambles.push(`B2 D' B' L' R' B R2 F' U' F' U2 R' L B2 D' R' B2 D2 L2 R' D2 R D' R U'`);
            scrambles.push(`L U' D' L' U2 D R2 F R2 D2 B2 L' U' R2 B R B D U F2 B2 U2 F B' L`);
            scrambles.push(`D B R U B2 F U2 B2 D' B U2 R' F' R' D2 L R' F' L2 D B' L R' D2 F'`);
            scrambles.push(`R U F' U2 F2 U' B2 F' D2 B2 L R' D' U F U2 B2 U L' F2 B2 R' F' B' L2`);
            scrambles.push(`D' R L F' B D2 L2 R' D' F2 R D R2 L U R' B2 R2 B R' U2 D L' B2 D2`);
            scrambles.push(`D2 R2 D' U L R' U2 B' R2 U2 D2 L' R' F L F' B' L F2 R B D2 U' R F`);
            scrambles.push(`F' R D L2 F' U R U R' D L F D2 L2 R' B' D L2 R' B U2 R' B2 D' B2`);
            scrambles.push(`U D' L2 U2 F2 R2 B' D L' B D F' L2 U2 L' D' L' F2 B R2 U2 F R' L' U'`);
            scrambles.push(`B' R' B U B2 F L2 B R2 B' L2 D2 U2 B2 D F' L' F2 R2 B2 F U' F' R' L`);
            scrambles.push(`B R' F2 B R F' L D2 B F R D2 L' U R' B2 F2 D2 F U2 D2 L2 R' B' F'`);
            scrambles.push(`U' B2 D' R F' U2 F2 B' L2 D B2 F' R L2 B' U2 D2 F R' L' D2 R' L' D2 F`);
            scrambles.push(`F2 U2 R' U2 F D R2 L2 U2 L' U L F2 U' D' L' D' L2 F' R2 B' F R2 L' B2`);
            scrambles.push(`L U D2 R2 L B D' L F' B2 D' U2 R F' B2 U' L F' R2 D L2 U D2 R2 D'`);
            scrambles.push(`L F D2 R' B D' B' U F2 R' D2 F B U2 F2 L F2 D R B2 L2 D2 R U2 L2`);
            scrambles.push(`R2 D' F L' R B2 F2 L' B' U' F' B D B2 F2 R' D2 F2 R' L' F2 L F' U D'`);
            scrambles.push(`R L B D2 B2 U B2 L2 D L2 B2 D2 U2 F' U D F2 L' F R U L R D U2`);
            scrambles.push(`F R L2 F' B U2 L U' L' D R2 U2 B F' R2 B' D L U' F R U2 L R B`);
            scrambles.push(`D U R L' U2 D' L D' L' D' F2 L2 D' B2 U' R2 U F2 B D F' U D' L R'`);
            scrambles.push(`F2 L2 B2 L R2 B2 F' L' U' D R L F B' L' R B2 R L2 U2 L' R U' F D`);
            scrambles.push(`F' D U R' B' L2 D2 U' F2 R' L D' R2 U2 D' B' R L U' R2 U B2 L B U'`);
            scrambles.push(`B' F' R' D2 L' D U2 F' R2 D2 B' U2 L2 U2 B2 F D2 F' D2 F2 L F' B' R D`);
            scrambles.push(`B F2 D2 B' D2 B D L2 D' U' R' B F U' B2 R2 D' U' F R2 U' F U' B' U'`);
            scrambles.push(`F' D' U L U2 R2 D' R L2 B2 R2 D2 L2 R' D L R2 D L D2 B2 R2 F2 R' F`);
            scrambles.push(`U L' R F2 B U F U2 F2 U2 F' U B' D F' R' F' L' F' L' D U F2 L D'`);
            scrambles.push(`R' L U R L' D' R2 F B2 U2 D' F' D' R' U' B L2 F' R D' F2 U' F B' D`);
            scrambles.push(`B U2 D2 B D' L2 U2 R U2 F2 L R2 F U B D B L' U2 B' F' U' B U' B`);
            scrambles.push(`L D' B2 F2 L' U' B2 D' F L2 R' D U2 L R2 D2 F D2 B' D2 F2 B D2 U2 F`);
            scrambles.push(`F D2 R2 F' U2 F R2 F D' L2 U2 R2 B2 U F B' R F2 R' D2 B' R' D' L' D2`);
            scrambles.push(`F' U F' B2 D2 F' R' B' L' D' B D' R' L U2 L' R' U' L R2 F2 U2 F2 R2 U`);
            scrambles.push(`U' F' B' D' L2 F R2 F B2 U' L2 R F' L2 F' R' D F' D2 B2 D F2 D B' D`);
            scrambles.push(`F U' B' D U R2 D' L2 R2 U' F U2 R2 D2 U R2 B L F R' U L' F R2 D`);
            scrambles.push(`B' L2 B U2 D' R L2 B' L F2 L2 U2 D2 F' U R F R2 B U2 D2 B2 D2 R F'`);
            scrambles.push(`B' U2 B D2 B' R B F' R' B2 D R D2 R' B2 D' F' D' U F R' D U' L F2`);
            scrambles.push(`R L' D2 R' D B2 R2 L2 D' R2 L B R L' D' F B U' L D2 U2 L B2 D2 F`);
            scrambles.push(`R2 F' D U2 B' U B' D2 R2 D2 U' R2 U2 F R U2 F B R' F B U2 B2 R2 U`);
            scrambles.push(`R D' R2 D' L2 R' F' R' U2 R L B' R L' B L R' B F R L' F2 U' D' L'`);
            scrambles.push(`F L F2 R F' R' L' B' U' D' F' L R' B' L' F' R2 F' R' U L D2 F B' U'`);
            scrambles.push(`F' D2 L2 R F' R' U' R' D2 L2 B' R2 L B L U2 R' L' D2 F R' U' F2 D' L2`);
            scrambles.push(`L2 B' L D F' D' L2 R' U' B' D2 F2 D2 B' F' R2 B R' L' F' U2 D' B' L' D2`);
            scrambles.push(`D' F' U R' F B' R D' F2 B2 L' U R' L' D2 R' D2 L' B F2 L B2 L' B2 F'`);
            scrambles.push(`R L2 D' L D' B' F L' B F2 R B2 D2 F2 B U' F2 U' B2 D L' B U' F' R2`);
            scrambles.push(`U2 D2 R' D L R U' F R2 F2 B2 U2 D' B2 L2 D B2 R2 B' L' U' B' U L2 F`);
            scrambles.push(`F' L2 R U' L' F L2 F' D L D2 L2 U' R2 L F2 D2 L R' F2 B2 U2 D2 B2 R'`);
            scrambles.push(`L2 B' U' D' B2 D' F2 U' L D' U B U2 F' D2 R2 B2 R' U' F' B' R F' B2 D`);
            scrambles.push(`U D' L U R' L2 U2 B2 F' L D2 B' F D' F D' F2 D2 B2 D' F' R2 B2 U L`);
            scrambles.push(`L R D' R' U2 B' F L F2 R L2 B' U' F2 L2 B2 D' L' F2 L' U' D B R' L2`);
            scrambles.push(`R2 L' D2 U L' U' L R' U2 D' L' R' B2 D' U2 L U' R' B L' F2 U L2 F' L2`);
            scrambles.push(`R2 B2 U R2 F2 U2 F2 R2 B' R2 D U' B' D' B' L' B R D2 B2 U B R' D U'`);
            scrambles.push(`B2 R L D F D F' U L2 R' U2 B F' D2 B' U2 D2 L' U2 B2 U2 L' B F2 U'`);
            scrambles.push(`F U' R L' F' R B F R' B D' B2 R B U B' L2 D' F2 U' R' L U2 D R`);
            scrambles.push(`R2 L2 F2 U2 B2 D B2 L F2 U2 D2 B R2 L2 B' D2 L2 F' B' U2 D2 B' U B' U2`);
            scrambles.push(`U2 R2 U2 R L B U' L2 F2 D' R' D' L F2 L' U' D R' F' U2 L' U B2 F2 U`);
            scrambles.push(`L' R U L U' L2 F2 D U2 L U F B L F2 L B R' L U2 F' R L F R`);
            scrambles.push(`F2 D F D R' B2 F' U' F U' R' B2 F' L F L2 U2 D L' U' B L' U2 R' L2`);
            scrambles.push(`F' B' U' B2 U' D2 F2 B R B2 F' D2 B2 F D2 B' L2 B L' B L2 B R2 U2 D'`);
            scrambles.push(`D2 R D' F L2 B' R2 F' D2 B' F R D2 F L' R' B F2 R L F' D U2 B' R'`);
            scrambles.push(`D U' R2 U' L U F' D L' U2 L2 R2 F2 D' F D R2 F2 L B' F U2 R B2 U`);
            scrambles.push(`L U D L2 D' B2 U R' D' F2 D2 L2 F R D B F U' L2 D F D B D2 R`);
            scrambles.push(`D L D2 R D2 U' F' B D' L R2 B U R D2 R L' F2 D' R F2 B D2 U' F`);
            scrambles.push(`R U B2 L D L' D2 L2 B' R B' U D L2 B U2 L' U' L2 D2 L2 F2 U B2 L'`);
            scrambles.push(`L2 B2 L D R' L' F D2 U' F2 D L D' L F B R L F L2 D' U L' R D'`);
            scrambles.push(`R2 F' D2 U B2 U' D' L R' U L D2 F2 U R L2 F' D' U2 L' R2 B' R2 F2 L2`);
            scrambles.push(`R2 F2 B2 U' R B F U2 L' F2 R F' U' B' R' F L2 U2 R L2 U2 F' R2 F' L2`);
            scrambles.push(`B2 U' L2 D' R U B F2 R B' U' B' R2 F2 R L' D2 B D' U' R' D2 F' L D`);
            scrambles.push(`D F L2 D' B2 U' F2 R2 U2 R B2 D L2 D L D2 R F' U2 L F' R D R D2`);
            scrambles.push(`R' L2 F D2 F' L B2 D U F R F' D R D' F R' U' F R D' U F R F`);
            scrambles.push(`F2 U D L U' F D2 B' R L2 D2 B2 L' B2 R2 B' F' R2 U2 R' D2 B U' D2 F'`);
            scrambles.push(`B F2 R B L' R' U' R' D2 R' F U2 F B2 U R L2 U F' B2 L B2 L' R B`);
            scrambles.push(`L' B2 L' F R D2 F2 R' B2 D F D L U' B' U' B' F' L2 U2 D2 B' R2 L2 F`);
            scrambles.push(`L' F L' F2 D' F U' B2 R' L2 D' U' R2 D U B U B2 R2 F' B L D B' D`);
            scrambles.push(`F D F2 B2 L2 U' B U' D2 R' U2 R U2 L' B' U2 L' U' B F' D F2 B L R`);
            scrambles.push(`F' B' R F D2 U R2 B F2 L' B L F2 D2 U' L B' F' R B F L' D' F2 U`);
            scrambles.push(`F2 D' L' F' L F2 R2 B2 F2 L' B F2 U' B' R2 F2 D' R F' U2 D2 B F U L'`);
            scrambles.push(`L U2 L' D2 U' F' D' L' D2 B' U' R2 B U D2 R2 B R' U2 L2 F' R2 F2 B2 R'`);
            scrambles.push(`F2 L' D L' D' L U' L2 U R' F L R F D' L2 R B2 L2 U L2 R2 B2 U2 F`);
            scrambles.push(`U2 D' B R' F' R2 U' D2 B' R D F2 B' D' L' D2 L2 F2 L U' L' D L D B'`);
            scrambles.push(`L2 B2 R D' F' D2 R' U B2 L' D2 R2 L D U' L2 B' D' L F2 L2 D2 L' B F`);
            scrambles.push(`U' L2 U' D R2 U F R2 L2 B' F D B' R2 U2 L D2 R B D' L' B L2 D2 U'`);
            scrambles.push(`R L' F D' L2 R' D' R2 D' B2 R D2 R2 L2 F' R B' L' R D F U' R L B'`);
            scrambles.push(`L2 D F U B2 L2 D2 L' B D' L' R' F2 D2 F2 B2 D2 U F' R' D' F' L2 R' F2`);
            scrambles.push(`D B' F' L2 D B D R' L D' U B F' U2 B2 R' D' U' F2 U2 B' D L D' U2`);
            scrambles.push(`B L R2 U D' R2 B' D' F2 D2 R' B2 U' D' R2 F B2 R2 F2 U L R' B2 D R'`);
            scrambles.push(`F2 U' R2 D' B2 R2 D2 R' F' B' L' R' U' D' R2 F' R' B L2 U2 F L2 F' L' B`);
            scrambles.push(`B' D F L F2 L U' L' D2 B' U2 D' F' D' B D' L' R2 D2 U' R' U' L2 R' D2`);
            scrambles.push(`L R B L2 R2 U2 D2 F2 L2 F' U2 D B' D' F2 R2 D F' L2 R' B2 R' U' F R'`);
            scrambles.push(`B D L2 U2 L' D' F2 U B' U R2 D R D2 B L U B D' F2 U R2 B2 D' F`);
            scrambles.push(`R' D2 F' U2 L2 U2 R2 D L B D' L2 B' U' B' L' R' B' F R' L' B' R2 D' B`);
            scrambles.push(`R F' R B2 U' B2 D' R2 D2 F2 L2 R' F L' B' R D R' B' U L F2 U2 R' B`);
            scrambles.push(`F2 U B2 R2 F L' R U2 R' U L2 B2 R2 L' D U B' R U2 L2 R2 B2 U R' U`);
            scrambles.push(`U2 L' U2 F L D' U F' B2 R' U F2 R U' F2 L R2 F2 B R D2 B2 L' D' U2`);
            scrambles.push(`D F2 D' F' U2 D2 B' R2 L' U R2 L D R' B' F' L' R2 F R L2 B2 D' B' U'`);
            scrambles.push(`F' U R' B' U F' L F' D2 R U' L2 D B2 F2 U' D' B' L2 U B' L' R F2 R`);
            scrambles.push(`D' U' L2 B2 R D F' D' B U' R2 U' L F' B D2 B2 U' B2 R2 B' F D2 B D2`);
            scrambles.push(`U' D2 B D B' L2 U' B' D' B' U' R D L2 R2 D' B' R2 U' R F' U' D2 R' D2`);
            scrambles.push(`U2 R2 L' U L2 D' L B' R2 L2 B U2 R F' U F' R2 B R' L' B2 L2 R2 U' F`);
            scrambles.push(`R2 L2 D2 L' R' F' D' U F2 D U' F' B2 L F' L' D2 F2 L2 D F' L2 F2 D2 B`);
            scrambles.push(`D' U' B2 R B' D2 L R' F B U' L' B2 L' B U F U2 R2 B2 F' U' R' L F`);
            scrambles.push(`B2 L' F' D' B R' F R F2 L2 B' R D' F2 R' D' L' R B2 U' D2 B' D' F L`);
            scrambles.push(`U2 R' F2 U2 L R2 U2 L2 U2 L2 F U D' L2 R' D2 F' L' D' F R' F2 L B D`);
            scrambles.push(`U' B2 L' U' B R U' B2 L' U2 D L U B2 L' F2 U2 D L' R' U L' U' F R2`);
            scrambles.push(`U F' L2 F2 R' B2 D2 B D2 B2 R D' F L' U D B' F' U' F U D B' R F'`);
            scrambles.push(`F B2 L F U2 F L2 D L B2 D' R2 B U B U2 R B D B2 U L2 D' B2 U'`);
            scrambles.push(`B' R2 B2 U' D2 B' F2 R L U2 L' B' D R' L2 U' L' F' R' U D R2 U' F U`);
            scrambles.push(`B L' F L2 B D2 B R' D' B2 R' D L U2 F' B2 L' D2 B' R B2 D2 F B' R2`);
            scrambles.push(`U2 L' D U2 L2 R2 U F' U2 L' U2 L B' F2 L2 R' U F2 D' L R' F' L D' U2`);
            scrambles.push(`D' B R B' U D B D R' D2 L2 F' B2 R' U2 B' L2 B U' L' D L2 F R D2`);
            scrambles.push(`R2 F D2 U F U2 F' U L B' F' U' D' B2 L R' F B2 D F2 R U L2 F D2`);
            scrambles.push(`B F R D2 L B2 F' L U' L' F2 U' F' R2 U' R' F D' L2 B2 U2 B' D2 R' B2`);
            scrambles.push(`F' B' D' U' L2 B D2 B2 L B' D2 F R D' L' F2 L2 B D R' D' R F' D U`);
            scrambles.push(`B' F U' L2 U' R2 L2 U2 L' D U2 R2 U F2 R' U2 B' D B L U' B2 L2 U' B2`);
            scrambles.push(`D' R' F B2 R2 F2 B D2 R2 B L2 F2 B' R F' U' D F2 R U' B' F2 U R2 D2`);
            scrambles.push(`U B2 R L2 F U' F' U' D B' U' F' U2 F' D2 U R' L2 U' D B' L2 U2 B2 R'`);
            scrambles.push(`R2 D F2 L D' U2 F2 U2 F2 B2 D2 F L' F2 D2 R L2 B2 L U' B' D B2 L2 R`);
            scrambles.push(`B' U' B D2 F2 D' B2 D2 F' B2 L2 F R' D' F2 B2 D' L' U B U2 L R' B U'`);
            scrambles.push(`B2 U' B U' D' B2 F' R2 D U2 L' D' B2 L2 R2 F R' L' D2 B L' F2 U F2 L2`);
            scrambles.push(`U F2 L U B' R' L2 U B' R2 F B U F' L' R2 U' R L2 D R' U R' B' L2`);
            scrambles.push(`R2 U L' U2 L' D F2 U L' R D2 U2 L B2 L2 R2 F U D2 L2 F' D U F' D2`);
            scrambles.push(`D' L F' R D' U2 F2 B' U2 R U B2 U D L2 D' L2 U D F2 R2 B2 R2 L2 D2`);
            scrambles.push(`U' F2 B' D' F2 L2 R B2 F R' L' F2 B R' B' L2 B D' L2 B F U D F U2`);
            scrambles.push(`U' F' L2 R U2 D R2 B' D L D2 U2 L' D L B F2 U R' L2 B' D F2 R' U2`);
            scrambles.push(`L' F D' L' D' R L F D2 B2 F' D2 U B' F' R2 F L2 B D2 L2 B2 U2 L' U`);
            scrambles.push(`F L B L2 D F' U2 R B2 U R B2 L U' L2 D F' R2 B2 D U' F2 B2 R2 B`);
            scrambles.push(`B' L2 U R2 L B U2 F D U2 F2 L R' D' L D2 U B R2 D U2 R' U2 R F`);
            scrambles.push(`D L' D' B F' L' D' U' L' U' L2 F' U2 R' B' R2 L2 D' U2 F' B2 R2 U2 F2 B`);
            scrambles.push(`D' B' D' R U' D' L B L' B2 D' L2 B' D B2 D2 L' R2 F2 L2 U2 L B F R'`);
            scrambles.push(`F' R F' D2 R2 D' F2 L2 B2 D' R F' U2 D R2 L' B' R U F2 R2 U' L2 D L2`);
            scrambles.push(`U2 F' L2 U2 D2 R' B R2 U2 L' R' F L' U L R U' D F2 L2 R2 B2 L U' R'`);
            scrambles.push(`L U2 D F' D' B2 R U2 R B U L' U2 B L D R' B L2 F D' L' R' F2 U2`);
            scrambles.push(`B2 U R2 L D2 F2 L2 D' F2 L D2 B' L B2 D B2 F' U2 F L' F' B' D' U L2`);
            scrambles.push(`D' R2 L D U2 L D' B2 F U2 D' F2 D B2 U' L R D L' R D L' R2 F2 D'`);
            scrambles.push(`U B' D B2 F2 L2 F B2 D R2 D2 U2 F' U2 L' B2 F' U' L' R2 U R2 F' U F2`);
            scrambles.push(`D' L B2 R U F B' R2 L2 U F' U F2 L2 F2 B2 L R' B D2 U F' R' B' L'`);
            scrambles.push(`L2 R2 D F' R F U F D2 F2 R2 L U L B' U L2 R' B' U' D B2 U2 D L'`);
            scrambles.push(`L U2 L F U2 R' U2 D F2 U2 B' F2 D U R2 U2 B F' D' U' L2 F' U2 F2 B2`);
            scrambles.push(`B' R' D2 L2 U2 D F2 R B2 F' D' F R2 F' B' L R' F2 D' U2 F2 R' F2 U' B`);
            scrambles.push(`B' L2 F R2 U' B' L2 R D2 F' U' D' F2 L B F' D L B2 L2 F' U' F2 U B'`);
            scrambles.push(`R F B' D U' L' R2 D F' R2 D2 F2 U R2 L2 B2 R2 F B2 D L2 B D2 U B2`);
            scrambles.push(`L U' R F B2 U2 D2 B F2 D F2 U' D2 B2 F2 U L R' D2 B' F U B D U'`);
            scrambles.push(`R F2 U' L2 U D2 L2 U2 R2 D' U' F' L' F2 U' B U B2 L' R' U' R L2 U R`);
            scrambles.push(`L D' U2 B2 D' B L2 D2 F L2 R B2 F2 L' F R' F2 L2 U' D2 B L D2 R2 F2`);
            scrambles.push(`L' F B D U R L' D2 U F' D B2 R' L F2 U' D R D F' D' U L2 D' U`);
            scrambles.push(`F2 B' R' B2 R' L' B U B U2 F2 D' R' F2 D B2 D L R2 D R2 F' R2 D R'`);
            scrambles.push(`B' R L' D' L2 F' D2 U R2 F' L2 F R D L' R' D2 L2 B U2 B2 L2 B' D L'`);
            scrambles.push(`F' R' U2 L' U D' B2 R F' D' U2 L2 B F2 R D2 B R2 F U F' B D R2 F`);
            scrambles.push(`U' L' R D' U B U D' L' F' L2 U R2 F D' B R' D2 B D L' R2 F2 B' L`);
            scrambles.push(`U' D R' L2 U2 R D' F U' F' D U' R U' F U R U F B2 R' B2 R' F2 D'`);
            scrambles.push(`D' U' L U2 D2 L R U2 L D' U2 B U2 B U2 D2 B2 D2 L F R2 B F2 L2 B`);
            scrambles.push(`F U B2 L' B' D R2 L' U2 D2 L2 U L D U2 B2 L2 D U L' U B D2 L B`);
            scrambles.push(`D' B L' D' F B2 D2 B2 U2 B2 R L2 U F2 L B' R' D2 B2 D L' D' R L2 D'`);
            scrambles.push(`L F2 D2 R' U' L D2 F L2 D' B U' L' B2 D2 U2 L R' B' D2 L F R F' D'`);
            scrambles.push(`D2 L' F D' L2 U R D2 U F' U B D B2 D U2 B2 U' F U2 F B L2 D U2`);
            scrambles.push(`D' U B' F' L' R' B2 U D F' D B' D2 U' B D B D2 L2 U2 B' U L2 R2 B'`);
            scrambles.push(`U' B R' D2 U2 R2 F' D2 L R2 B L2 D2 U B L R2 D' U2 L' R2 D2 U' R L`);
            scrambles.push(`B2 D' L' D2 U' B L R' F U' D L' B' R2 B F' L U2 B' F U2 R2 F' B L'`);
            scrambles.push(`D2 R2 L2 F' L2 D2 F2 B U2 R B U' L2 U D2 B D2 U L' U L F2 U F2 U'`);
            scrambles.push(`U' B' U' R' U' L' F D F2 L' U F2 D' U B U D F' B2 D2 B' R B D L`);
            scrambles.push(`B' F' D R' L F U L B2 R D2 F L D2 R2 F2 U' R2 D' R2 D R F' L U2`);
            scrambles.push(`D L R D2 U F2 B2 R D' U R F2 R U' F2 U F' B R F2 U2 R' B U2 D`);
            scrambles.push(`B R2 F B2 R' F' U2 B2 U F' U2 D B' R U' L2 B2 U L D L' R U2 L2 B2`);
            scrambles.push(`R' L' U2 D2 F2 B L U D' L U2 F U' B' L F2 L B' F' R' B2 R' B2 D' B`);
            scrambles.push(`F2 U' D F' R2 U2 D2 L B' L R' U2 D2 B2 D' F' D' B' L B D L2 F' U' L'`);
            scrambles.push(`B2 L' F B L2 B2 D B2 D' B2 D B2 R' D2 F' B U2 D2 F R F2 R2 D2 F U`);
            scrambles.push(`D R L2 D' B2 U2 B2 D B' U' R' B' F L U2 D L R2 U D' F U2 B2 F' R2`);
            scrambles.push(`B2 D2 B U' F U2 L2 R2 U B' D2 R' U' L B R' B U2 B L2 F' U B2 L' D`);
            scrambles.push(`D R2 B' F D R2 L2 D' R2 B' L2 U R' D2 B' R' D2 R2 U B D R' B' U' F'`);
            scrambles.push(`D U F' U' R2 L' B R' B2 R2 D' R2 U' D2 F' R2 F B' U D' L' F2 D L2 F'`);
            scrambles.push(`R2 L' U2 R' B F D' B D2 U2 R2 B' R B2 D R F2 R' F' L' R2 B L F D'`);
            scrambles.push(`D2 F D L' R B R' U' B2 F' R B' L R' U' D F L B2 F' D L' U D' B2`);
            scrambles.push(`L U2 L' R' U' L' R2 D' L F' L U F2 B' R U' D2 L R' B' D R' D U2 B'`);
            scrambles.push(`R2 U2 R' D' L B D2 U B L' D' B2 D2 L U' F D U2 F2 R D2 U2 F2 R' L`);
            scrambles.push(`U' R2 U L2 F2 R2 L U B' L2 R' U' R' D U2 R B F' D' B' D' L2 B F D2`);
            scrambles.push(`L' D' R2 U B' R' U R B' R' D' F' B2 U2 B2 R2 L' D R2 F R2 B U D B`);
            scrambles.push(`R2 L F' D2 B U' B R F D2 U2 F2 B R L' B2 D' B2 R' U B2 D' L' F' B2`);
            scrambles.push(`F L' B' U' D' L R2 B2 F2 R2 F2 B' L F' L U' R' D2 R' D B L F2 B' D'`);
            scrambles.push(`F2 B' D2 B' R D2 L F U B2 U2 D B' L2 R2 U2 D R2 F2 B L U2 L' B2 R`);
            scrambles.push(`B U R2 D' B' R2 F L' F' R' D' U2 R2 F2 D2 U2 L2 D R2 L' D' L B L2 U2`);
            scrambles.push(`D F' L' D F B' L' F' R2 F2 D' F2 D' U' R2 D2 B' U' B' F R2 L2 B2 D' B`);
            scrambles.push(`F B' U' D2 B R' L2 F2 D2 U' B' D F R' U2 D F' U B D' F2 D2 L2 R2 U`);
            scrambles.push(`U2 D R F D' F B' R' B' L F2 R2 F B2 D' B U L2 U2 F L' R' D2 U2 L'`);
            scrambles.push(`D F2 R L2 F' D2 L F' U D' L U2 R L' D B D' R2 F' D U F' D' B D2`);
            scrambles.push(`R L' F D L D' L2 D U2 F' B R F' L F2 R2 D' B2 L2 D B' L' F2 R' U`);
            scrambles.push(`B F2 U L2 F2 R2 B' F2 U L2 B2 L F' B D B L2 D U R2 L2 D L' B2 R'`);
            scrambles.push(`F' R2 D R' L2 U2 L B D' U L2 U F' D L U B' D2 R' F L' U2 R2 F2 B2`);
            scrambles.push(`L' D R2 F' U2 D2 B D L F B' R' L' F' R2 L2 B' D U2 B' L' F' U2 L' B`);
            scrambles.push(`B2 F' L D R' B2 L' F2 B' R2 U2 L' D U2 R U F R F L B' L2 D U2 R`);
            scrambles.push(`B U2 L2 D2 R2 F2 U D2 F' R B' L2 D2 F' D' L U' L2 D2 U' R2 L B' L R2`);
            scrambles.push(`L2 U2 D' F' D2 R' B L B2 U' B L2 F D2 B' F R' L U2 R' D' U2 R2 U B2`);
            scrambles.push(`L' B' F U L2 U' F' L' D L2 U2 R F' B2 R' F' R' F2 D2 F' L' B2 F2 D U`);
            scrambles.push(`L2 U D2 F B2 L' D2 U F' R2 D2 L2 R F R' L' D2 R2 L B D' L2 F' B' U'`);
            scrambles.push(`R2 L B' U F' B' D' B2 F U2 B' R F2 B2 D U' B2 L' D' U2 F2 L F' U' F`);
            scrambles.push(`U' L2 B D' L2 F2 R U' L' R U2 R B' F2 R D' L2 F U L F2 D2 U B' F2`);
            scrambles.push(`D' B' D2 B2 U D2 L2 D' U2 R2 F2 D2 L2 F2 B R2 B' R' F U2 B D2 B' R D2`);
            scrambles.push(`L2 F D U' R' B' D L2 R2 F' L U D' F2 B' L2 B2 R D2 B2 D' F R' U F`);
            scrambles.push(`B2 F2 U R' U2 F2 B' D2 L' U R L2 F L' B' D B R2 L' B' L2 F2 L2 U F'`);
            scrambles.push(`U D' B2 U2 B' F D2 F2 B' U2 B2 L' B2 F' R' D L' U B2 L D2 B R B F'`);
            scrambles.push(`R L2 D L' B U2 D2 F L B L2 D U' L' R F2 U L F B2 R2 L B' D' R`);
            scrambles.push(`F' L2 F' D2 F2 R' F' U2 D R2 L D' R2 D' U' F' L B2 D2 B R' D' R2 B U'`);
            scrambles.push(`R2 L' B' U' L R' B' D2 B L' D U F L R2 U' B2 R2 B L2 U2 B2 R' B' R'`);
            scrambles.push(`F L' R2 F D2 U' F D F2 R' U B' U' L D' R2 U F' D2 F' U' B' L' R U2`);
            scrambles.push(`D B' F' R D' L' D L' U L2 B U B L' B2 U' B2 F2 U R' F2 R D U' R'`);
            scrambles.push(`U' B' L B' D' U2 B2 U B2 D' F2 L' F L B2 U2 F L2 D' F L' R D U' L2`);
            scrambles.push(`F D2 L' R U' R2 L2 B R2 L D' B F2 R' D' R2 F D B2 F2 D2 F2 L' D2 U'`);
            scrambles.push(`F' D' F D2 U2 R2 U' F2 U' F2 L R2 D2 U R U L U' R2 B U R' U B' L`);
            scrambles.push(`F2 L2 F D' U2 B2 U' L' F U2 D' F2 U2 D' B' R B2 L' D U R2 U' L2 F R'`);
            scrambles.push(`B' L2 F U' B' R' F' D U' F' D' U B2 L2 B L' B D F L F D F' D U2`);
            scrambles.push(`D2 B' D L F B' U' F' R U D' L D2 R2 B2 U2 F2 B L2 D2 L' B' F' U R`);
            scrambles.push(`D R2 D' B2 D2 F R2 F' B2 L R B F2 R F U L R2 U L F D2 F B' L2`);
            scrambles.push(`R' L2 F L2 F2 R' U R B2 D2 L2 F L2 R2 B2 U' B2 D B' F2 R2 B U' R2 B`);
            scrambles.push(`L2 F U B2 L R' B2 D R' F B R2 L' D R U D B' R D F B' R2 B U`);
            scrambles.push(`B R U' F2 R2 F2 D2 F' R' L D' L' F2 B' D' R2 B D U' F2 U' R2 F B2 U'`);
            scrambles.push(`R D2 U2 F2 D B2 R2 B2 F' U2 D2 L' B2 F2 D F' R' U2 F' R' D2 B2 F U2 R'`);
            scrambles.push(`B R2 D B' D L' R D L D2 F2 U B L' B' L' D L2 B' F' D2 L2 F L' B'`);
            scrambles.push(`R U' B2 R' U' L2 D2 U2 F' B U L U' R2 F L' D2 B' L' R2 F D F' U2 B2`);
            scrambles.push(`L2 B2 R B' U2 F U' B L F2 B' R2 D' B2 D B F2 L2 B' L B F' L2 D' R'`);
            scrambles.push(`U2 R2 U F2 R' D' F L' F2 L B D B' F D R' D F D' B2 D B R2 L2 F2`);
            scrambles.push(`B' U F2 L' B U' L2 U B' F' L2 F2 R2 B R F D R2 L2 F U' F2 R2 U' D2`);
            scrambles.push(`U2 R2 B2 R' F B2 D2 L' F' B R2 B' R' D' B F2 R2 F2 D2 B R' U' L U2 R'`);
            scrambles.push(`U B2 D2 B' U2 F R B R2 L2 B L' F R2 B2 L2 R2 D' B' F' U2 R D R L'`);
            scrambles.push(`D' L R' F U L D' U' B' R' U B R2 F B L D' F' L2 D2 R L' B' R' F'`);
            scrambles.push(`B' R F2 R2 B' D2 L B' L' D R U' R2 D B U B F U' B U L' R2 D' B`);
            scrambles.push(`F2 L' F U L2 B2 R F L2 U B' R L' F' R F' R2 U' F' U L B R B' F2`);
            scrambles.push(`R D B' D F' U2 L B2 R' B' F2 R2 B2 F2 U2 F' B2 D' R2 L F' L2 B2 U2 R`);
            scrambles.push(`R F L2 R' U F L' D2 R' L' U2 F' B2 U2 F' L' F' B2 D2 L' B' R' U2 L D'`);
            scrambles.push(`L' U' F' R2 L2 B2 U D' R U L B' U F2 U' L2 F2 U D' B2 U' D2 L R2 B'`);
            scrambles.push(`R2 L2 D2 R' F2 L2 B' R2 F R' U2 L D2 U2 R' U' D L2 D U L F2 L B2 R2`);
            scrambles.push(`B' D2 U' R2 D2 B' F' D2 B' R U D2 F' U2 R D B' U' F2 B U' F2 R' D L2`);
            scrambles.push(`U2 R2 L2 D' U F B R' F2 R' B2 U2 L' U2 F' D' U R U B' D2 F' R2 L2 B2`);
            scrambles.push(`D R2 U' L2 U' R' B2 U' R2 F2 U' L' U B2 R2 B U' F2 R B2 L U2 L' D' U2`);
            scrambles.push(`F' L2 D R2 D' F' R D2 U' F' R L2 B2 R2 F' U2 L2 R U' F U' F2 D2 R2 L2`);
            scrambles.push(`F2 U B' F' U' B2 D' F L R D2 R F2 L2 D B L2 B2 R L' D2 L2 D F' B2`);
            scrambles.push(`L' F2 R U' R2 F D' R' B2 L' U L2 R' D' U2 R2 U2 D B2 D2 B2 U' D2 B' R'`);
            scrambles.push(`R2 L2 B2 F' U B F' D B2 R2 F' B' R2 B R L' F R2 B2 F U2 L' B2 L2 R'`);
            scrambles.push(`L D2 R' F' R D' R B' L' D' U2 L U2 F R D R' L F' L2 B U' L2 B2 R'`);
            scrambles.push(`D' U R B D' R' U2 F2 R' F' L2 F' L F2 U L2 B U2 B2 R U' B2 U2 R' L2`);
            scrambles.push(`B2 U B2 R B D2 U2 F' U R' U2 D' B F L' F2 D' R L U F2 R2 L F2 R2`);
            break;

        default:
            console.log('*** populateScrambles - unknown setName:', setName);
    }
}
