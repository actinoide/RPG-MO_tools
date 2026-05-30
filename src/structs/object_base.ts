interface object_base_struct {
  b_i: number, //index of object
  b_t: string, //type of object
  name: string,
  type: string,
  img: {
    sheet: string,
    x: number,
    y: number;
  },
  params: {
    duration: number,
    desc: string,
    results: result[];
  },
  activities: string[],
  fn: {};
}