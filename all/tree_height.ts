function solution(T: Tree): number {
  return traverse(T, 0);
}

function traverse(T: Tree, path: number): number {
  if (!T) return path - 1;

  const lpath = traverse(T.l, path + 1);
  const rpath = traverse(T.r, path + 1);

  return Math.max(lpath, rpath);
}
