// code your solution here



const superbowlWin = function (record) {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }

  superbowlWin(record)

  

/*



*/
