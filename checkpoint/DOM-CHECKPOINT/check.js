// // ✅ Problem 2 — Dot Product and Orthogonality


// // 🔹 PART A — PROCEDURE VERSION

// PROCEDURE dot_product(VAR ps: REAL, IN v1: ARRAY of REAL, IN v2: ARRAY of REAL, IN size: INTEGER)
// VAR
//     i: INTEGER
// BEGIN
//     ps := 0
//     FOR i FROM 0 TO size - 1 DO
//         ps := ps + v1[i] * v2[i]
//     END_FOR
// END

// ALGORITHM check_orthogonal_vectors
// VAR
//     v1, v2 : ARRAY of REAL
//     ps : REAL
//     i, j, size, n : INTEGER
// BEGIN
//     Read n \\

//     FOR i FROM 1 TO n DO
//         Read size
//         DECLARE v1[size], v2[size]

//         FOR j FROM 0 TO size - 1 DO
//             Read v1[j]
//         END_FOR

//         FOR j FROM 0 TO size - 1 DO
//             Read v2[j]
//         END_FOR

//         CALL dot_product(ps, v1, v2, size)

//         IF ps = 0 THEN
//             Write("Vectors are orthogonal")
//         ELSE
//             Write("Vectors are not orthogonal")
//         END_IF
//     END_FOR
// END


// // 🔹 PART B — FUNCTION VERSION

// FUNCTION dot_product(IN v1: ARRAY of REAL, IN v2: ARRAY of REAL, IN size: INTEGER): REAL
// VAR
//     i : INTEGER
//     result : REAL
// BEGIN
//     result := 0
//     FOR i FROM 0 TO size - 1 DO
//         result := result + v1[i] * v2[i]
//     END_FOR
//     RETURN result
// END

// ALGORITHM check_orthogonal_with_function
// VAR
//     v1, v2 : ARRAY of REAL
//     ps : REAL
//     i, j, size, n : INTEGER
// BEGIN
//     Read n

//     FOR i FROM 1 TO n DO
//         Read size
//         DECLARE v1[size], v2[size]

//         FOR j FROM 0 TO size - 1 DO
//             Read v1[j]
//         END_FOR

//         FOR j FROM 0 TO size - 1 DO
//             Read v2[j]
//         END_FOR

//         ps := dot_product(v1, v2, size)

//         IF ps = 0 THEN
//             Write("Vectors are orthogonal")
//         ELSE
//             Write("Vectors are not orthogonal")
//         END_IF
//     END_FOR
// END
