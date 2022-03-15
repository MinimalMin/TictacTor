function result(TicTacToe){
    row1 = TicTacToe[0]
    row2 = TicTacToe[1]
    row3 = TicTacToe[2]
      console.log(row1.find(check))
      casewin1 = row1[0]+row1[1]+row1[2]
      casewin2 = row2[0]+row2[1]+row2[2]
      casewin3 = row3[0]+row3[1]+row3[2]
      casewin4 = row1[0]+row2[0]+row3[0]
      casewin5 = row1[1]+row2[1]+row3[1]
      casewin6 = row1[2]+row2[2]+row3[2]
      casewin7 = row1[2]+row2[1]+row3[0]
  
      function check(number) {
          return   number < 1;
      }
  
      if(row1.find(check) == 0|| row2.find(check) == 0 || row3.find(check) == 0){
          return null
      }else if(casewin1 == 3 || casewin2 == 3 || casewin3 == 3 || casewin4 == 3 || casewin5 == 3 || casewin6 == 3 || casewin7 ==3 ){
          return "X Win";
      }else if(casewin1 == 6 || casewin2 == 6 || casewin3 == 6 || casewin4 == 6 || casewin5 == 6 || casewin6 == 6 || casewin7 == 6 ){
          return "O Win";
      } else{
          return "Draw"
      }
  
  }