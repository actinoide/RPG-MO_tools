interface result {
  requires_one_from: number[],
  requires: number[],
  skill: string,
  continuous: boolean,
  returns : returns[];
}


interface returns {
  id: number,
  level: number,
  base_chance: number,
  max_chance: number,
  next: boolean;
  duration: number,
  xp: number;
  consumes: {
    id: number,
    count: number;
  }[];
}