/**
 * 参考：
 * 空间直线与球面的相交算法 
 * https://www.freesion.com/article/27911005259/
 * @param {*} vector1 
 * @param {*} vector2 
 * @returns 
 */


/* 两个向量的差, (vector1 - vector2). */
function  vdiff(vector1, vector2) {
    const v = {}
    v.x = vector1.x - vector2.x;
    v.y = vector1.y - vector2.y;
    v.z = vector1.z - vector2.z;
    return v;
}

/* 两个向量的和, (vector1 + vector2). */
function vsum(vector1, vector2)
{
    const v = {}
    v.x = vector1.x + vector2.x;
    v.y = vector1.y + vector2.y;
    v.z = vector1.z + vector2.z;
    return v;
}

/* 向量的数乘1. */
function vmul(vector, n)
{
    const v = {}
    v.x = vector.x * n;
    v.y = vector.y * n;
    v.z = vector.z * n;
    return v;
}

/* 向量的数乘2. */
function vdiv(vector, n)
{
    const v = {}
    v.x = vector.x / n;
    v.y = vector.y / n;
    v.z = vector.z / n;
    return v;
}

/* 向量的欧几里得范数 */
function vdist(v1, v2)
{
    let xd = v1.x - v2.x;
    let yd = v1.y - v2.y;
    let zd = v1.z - v2.z;
    return Math.sqrt(xd * xd + yd * yd + zd * zd);
}

/* 向量的欧几里得范数  */
function vnorm(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
}

/* 两个向量的点积*/
function dot(vector1, vector2) {
    return vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
}

/*两个向量的叉积 */
function cross(vector1, vector2)
{
    const v = {}
    v.x = vector1.y * vector2.z - vector1.z * vector2.y;
    v.y = vector1.z * vector2.x - vector1.x * vector2.z;
    v.z = vector1.x * vector2.y - vector1.y * vector2.x;
    return v;
}


/* Intersecting a sphere sc with radius of r, with a line p1-p2.
 * Return zero if successful, negative error otherwise.
 * mu1 & mu2 are constant to find points of intersection.
 * 球和直线的相交
 *
*/
function sphereline(p1,  p2, sc, r) {
	debugger
   let a,b,c;
   let bb4ac;
   let dp = {}

   dp.x = p2.x - p1.x;
   dp.y = p2.y - p1.y;
   dp.z = p2.z - p1.z;

   a = dp.x * dp.x + dp.y * dp.y + dp.z * dp.z;

   b = 2 * (dp.x * (p1.x - sc.x) + dp.y * (p1.y - sc.y) + dp.z * (p1.z - sc.z));

   c = sc.x * sc.x + sc.y * sc.y + sc.z * sc.z;
   c += p1.x * p1.x + p1.y * p1.y + p1.z * p1.z;
   c -= 2 * (sc.x * p1.x + sc.y * p1.y + sc.z * p1.z);
   c -= r * r;

   bb4ac = b * b - 4 * a * c;

   if (a == 0 || bb4ac < 0) {
      mu1 = 0;
      mu2 = 0;
      return -1;
   }

   let mu1 = (-b + Math.sqrt(bb4ac)) / (2 * a);
   let mu2 = (-b - Math.sqrt(bb4ac)) / (2 * a);

   return {res1: mu1, res2: mu2}
}


function main( point) {
	debugger

    const O = point
    // O.x = 30;
    // O.y = 40;
    // O.z = 70;

    const E = {}
    E.x = 0;
    E.y = 0;
    E.z = 0;

    const Center = {}
    Center.x = 0;
    Center.y = 0;
    Center.z = 0;

	// TODO: 改变距离
    const R = 100;

    const {res1, res2} = sphereline(O,E,Center,R);

    let ex,t2,t3;
    let h;

    ex = vdiff(E, O); // vector result1-result2
    h = vnorm(ex); // scalar result1-result2
    ex = vdiv(ex, h); // unit vector ex with respect to result1 (new coordinate system)
    /* t2 points to the intersection */
    t2 = vmul(ex, res1 * h);
    t2 = vsum(O, t2);

    t3 = vmul(ex, res2 * h);
    t3 = vsum(O, t3);


    return [t2, t3]
    
}


