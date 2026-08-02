function compilerService(sourceCode) {


  const ir = `
; ModuleID = 'main.cpp'

define i32 @main() {

entry:

  %a = alloca i32
  %b = alloca i32

  store i32 10, i32* %a
  store i32 20, i32* %b

  %sum = add i32 10, 20

  ret i32 0

}
`;


  const suggestions = [

    "Loop unrolling can improve execution speed.",

    "Reduce unnecessary memory allocation.",

    "Use optimized instructions for arithmetic operations."

  ];


  return {
    ir,
    suggestions
  };

}


export default compilerService;
