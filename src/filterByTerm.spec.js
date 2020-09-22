function filterByTerm(inputArr, searchTerm) {
  if (searchTerm) {
    let res = [];
    searchTerm = searchTerm.toLowerCase();
    inputArr.forEach((element) => {
      if (element.url.includes(searchTerm)) res.push(element);
    });
    return res;
  }
  return null;
  // let res = inputArr.filter(function (arrayElement) {
  //   return arrayElement.url.match(searchTerm);
  // });
}

describe("Filter function", () => {
  it("should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output); // New test
    expect(filterByTerm(input, "")).toBeNull(); // New test
    expect(filterByTerm(input, "uRI")).toEqual([]); // New test
  });
});
