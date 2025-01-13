//var BASE_URL = "https://compiler.scientificprogramming.io/";
var BASE_URL = "https://compiler.learnitive.com/";


function encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function decode(bytes) {
  var escaped = escape(atob(bytes));
  try {
    return decodeURIComponent(escaped);
  } catch {
    return unescape(escaped);
  }
}

function getIdFromURI() {
  return location.search.substr(1).trim();
}



// Template Sources
var assemblySource = "\
section    .text\n\
    global _start\n\
\n\
_start:\n\
\n\
    xor    eax, eax\n\
    lea    edx, [rax+len]\n\
    mov    al, 1\n\
    mov    esi, msg\n\
    mov    edi, eax\n\
    syscall\n\
\n\
    xor    edi, edi\n\
    lea    eax, [rdi+60]\n\
    syscall\n\
\n\
section    .rodata\n\
\n\
msg    db 'hello, world', 0xa\n\
len    equ    $ - msg\n\
";

var bashSource = "echo \"hello, world\"";

var basicSource = "PRINT \"hello, world\"";

var cSource = "\
#include <stdio.h>\n\
\n\
int main(void) {\n\
    printf(\"hello, world\\n\");\n\
    return 0;\n\
}\n\
";

var csharpSource = "\
public class Hello {\n\
    public static void Main() {\n\
        System.Console.WriteLine(\"hello, world\");\n\
    }\n\
}\n\
";

var cppSource = "\
#include <iostream>\n\
\n\
int main() {\n\
    std::cout << \"hello, world\" << std::endl;\n\
    return 0;\n\
}\n\
";

var clojureSource = "(println \"hello, world\")\n";

var cobolSource = "\
IDENTIFICATION DIVISION.\n\
PROGRAM-ID. MAIN.\n\
PROCEDURE DIVISION.\n\
DISPLAY \"hello, world\".\n\
STOP RUN.\n\
";

var lispSource = "(write-line \"hello, world\")";

var dSource = "\
import std.stdio;\n\
\n\
void main()\n\
{\n\
    writeln(\"hello, world\");\n\
}\n\
";

var elixirSource = "IO.puts \"hello, world\"";

var erlangSource = "\
main(_) ->\n\
    io:fwrite(\"hello, world\\n\").\n\
";

var executableSource = "\
Judge0 IDE assumes that content of executable is Base64 encoded.\n\
\n\
This means that you should Base64 encode content of your binary,\n\
paste it here and click \"Run\".\n\
\n\
Here is an example of compiled \"hello, world\" NASM program.\n\
Content of compiled binary is Base64 encoded and used as source code.\n\
\n\
https://ide.judge0.com/?kS_f\n\
";

var fsharpSource = "printfn \"hello, world\"\n";

var fortranSource = "\
program main\n\
    print *, \"hello, world\"\n\
end\n\
";

var goSource = "\
package main\n\
\n\
import \"fmt\"\n\
\n\
func main() {\n\
    fmt.Println(\"hello, world\")\n\
}\n\
";

var groovySource = "println \"hello, world\"\n";

var haskellSource = "main = putStrLn \"hello, world\"";

var javaSource = "\
public class Main {\n\
    public static void main(String[] args) {\n\
        System.out.println(\"hello, world\");\n\
    }\n\
}\n\
";

var javaScriptSource = "console.log(\"hello, world\");";

var kotlinSource = "\
fun main() {\n\
    println(\"hello, world\")\n\
}\n\
";

var luaSource = "print(\"hello, world\")";

var objectiveCSource = "\
#import <Foundation/Foundation.h>\n\
\n\
int main() {\n\
    @autoreleasepool {\n\
        char name[10];\n\
        scanf(\"%s\", name);\n\
        NSString *message = [NSString stringWithFormat:@\"hello, %s\\n\", name];\n\
        printf(\"%s\", message.UTF8String);\n\
    }\n\
    return 0;\n\
}\n\
";

var ocamlSource = "print_endline \"hello, world\"";

var octaveSource = "printf(\"hello, world\\n\");";

var pascalSource = "\
program Hello;\n\
begin\n\
    writeln ('hello, world')\n\
end.\n\
";

var perlSource = "\
my $name = <STDIN>;\n\
print \"hello, $name\";\n\
";

var phpSource = "\
<?php\n\
print(\"hello, world\\n\");\n\
?>\n\
";

var plainTextSource = "hello, world\n";

var prologSource = "\
:- initialization(main).\n\
main :- write('hello, world\\n').\n\
";

var pythonSource = "print(\"hello, world\")";

var rSource = "cat(\"hello, world\\n\")";

var rubySource = "puts \"hello, world\"";

var rustSource = "\
fn main() {\n\
    println!(\"hello, world\");\n\
}\n\
";

var scalaSource = "\
object Main {\n\
    def main(args: Array[String]) = {\n\
        val name = scala.io.StdIn.readLine()\n\
        println(\"hello, \"+ name)\n\
    }\n\
}\n\
";

var sqliteSource = "\
-- On Judge0 IDE your SQL script is run on chinook database (https://www.sqlitetutorial.net/sqlite-sample-database).\n\
-- For more information about how to use SQL with Judge0 API please\n\
-- watch this asciicast: https://asciinema.org/a/326975.\n\
SELECT\n\
    Name, COUNT(*) AS num_albums\n\
FROM artists JOIN albums\n\
ON albums.ArtistID = artists.ArtistID\n\
GROUP BY Name\n\
ORDER BY num_albums DESC\n\
LIMIT 4;\n\
";
var sqliteAdditionalFiles = "";

var swiftSource = "\
import Foundation\n\
let name = readLine()\n\
print(\"hello, \\(name!)\")\n\
";

var typescriptSource = "console.log(\"hello, world\");";

var vbSource = "\
Public Module Program\n\
   Public Sub Main()\n\
      Console.WriteLine(\"hello, world\")\n\
   End Sub\n\
End Module\n\
";

var c3Source = "\
// On the Judge0 IDE, C3 is automatically\n\
// updated every hour to the latest commit on master branch.\n\
module main;\n\
\n\
extern func void printf(char *str, ...);\n\
\n\
func int main()\n\
{\n\
    printf(\"hello, world\\n\");\n\
    return 0;\n\
}\n\
";

var javaTestSource = "\
import static org.junit.jupiter.api.Assertions.assertEquals;\n\
\n\
import org.junit.jupiter.api.Test;\n\
\n\
class MainTest {\n\
    static class Calculator {\n\
        public int add(int x, int y) {\n\
            return x + y;\n\
        }\n\
    }\n\
\n\
    private final Calculator calculator = new Calculator();\n\
\n\
    @Test\n\
    void addition() {\n\
        assertEquals(2, calculator.add(1, 1));\n\
    }\n\
}\n\
";

var mpiccSource = "\
// Try adding \"-n 5\" (without quotes) into command line arguments. \n\
#include <mpi.h>\n\
\n\
#include <stdio.h>\n\
\n\
int main()\n\
{\n\
    MPI_Init(NULL, NULL);\n\
\n\
    int world_size;\n\
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);\n\
\n\
    int world_rank;\n\
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);\n\
\n\
    printf(\"Hello from processor with rank %d out of %d processors.\\n\", world_rank, world_size);\n\
\n\
    MPI_Finalize();\n\
\n\
    return 0;\n\
}\n\
";

var mpicxxSource = "\
// Try adding \"-n 5\" (without quotes) into command line arguments. \n\
#include <mpi.h>\n\
\n\
#include <iostream>\n\
\n\
int main()\n\
{\n\
    MPI_Init(NULL, NULL);\n\
\n\
    int world_size;\n\
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);\n\
\n\
    int world_rank;\n\
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);\n\
\n\
    std::cout << \"Hello from processor with rank \"\n\
              << world_rank << \" out of \" << world_size << \" processors.\\n\";\n\
\n\
    MPI_Finalize();\n\
\n\
    return 0;\n\
}\n\
";

var mpipySource = "\
# Try adding \"-n 5\" (without quotes) into command line arguments. \n\
from mpi4py import MPI\n\
\n\
comm = MPI.COMM_WORLD\n\
world_size = comm.Get_size()\n\
world_rank = comm.Get_rank()\n\
\n\
print(f\"Hello from processor with rank {world_rank} out of {world_size} processors\")\n\
";

var nimSource = "\
# On the Judge0 IDE, Nim is automatically\n\
# updated every day to the latest stable version.\n\
echo \"hello, world\"\n\
";

var pythonForMlSource = "\
import mlxtend\n\
import numpy\n\
import pandas\n\
import scipy\n\
import sklearn\n\
\n\
print(\"hello, world\")\n\
";

var bosqueSource = "\
// On the Judge0 IDE, Bosque (https://github.com/microsoft/BosqueLanguage)\n\
// is automatically updated every hour to the latest commit on master branch.\n\
\n\
namespace NSMain;\n\
\n\
concept WithName {\n\
    invariant $name != \"\";\n\
\n\
    field name: String;\n\
}\n\
\n\
concept Greeting {\n\
    abstract method sayHello(): String;\n\
    \n\
    virtual method sayGoodbye(): String {\n\
        return \"goodbye\";\n\
    }\n\
}\n\
\n\
entity GenericGreeting provides Greeting {\n\
    const instance: GenericGreeting = GenericGreeting@{};\n\
\n\
    override method sayHello(): String {\n\
        return \"hello world\";\n\
    }\n\
}\n\
\n\
entity NamedGreeting provides WithName, Greeting {\n\
    override method sayHello(): String {\n\
        return String::concat(\"hello\", \" \", this.name);\n\
    }\n\
}\n\
\n\
entrypoint function main(arg?: String): String {\n\
    var val = arg ?| \"\";\n\
    if (val == \"1\") {\n\
        return GenericGreeting@{}.sayHello();\n\
    }\n\
    elif (val == \"2\") {\n\
        return GenericGreeting::instance.sayHello();\n\
    }\n\
    else {\n\
        return NamedGreeting@{name=\"bob\"}.sayHello();\n\
    }\n\
}\n\
";

var matlabSource = "disp(\'Hello world\')\n";


var mpicSource = "\
#include <stdio.h>\n\
#include <mpi.h>\n\
int main(int argc, char **argv)\n\
{\n\
   int node;\n\
   MPI_Init(&argc,&argv);\n\
   MPI_Comm_rank(MPI_COMM_WORLD, &node);\n\
   printf(\"Hello World from Node %d\",node);\n\
   MPI_Finalize();\n\
return 0;\n\
}\n";

var mpicppSource = "\
#include <iostream>\n\
#include <mpi.h>\n\
int main(int argc, char **argv)\n\
{\n\
   int node;\n\
   MPI_Init(&argc,&argv);\n\
   MPI_Comm_rank(MPI_COMM_WORLD, &node);\n\
   std::cout<< \"Hello World from Node \"<<node<< std::endl;\n\
   MPI_Finalize();\n\
return 0;\n\
}\n";

var cudaSource = "#include <stdio.h> \n\
#include <stdlib.h>\n\
#include <math.h>\n\
#include <assert.h>\n\
#include <cuda.h>\n\
#include <cuda_runtime.h>\n\
#define N 1000\n\
#define MAX_ERR 1e-6\n\
__global__ void vector_add(float *out, float *a, float *b, int n) {\n\
    for(int i = 0; i < n; i ++){\n\
        out[i] = a[i] + b[i];\n\
    }\n\
}\n\
int main(){\n\
    float *a, *b, *out;\n\
    float *d_a, *d_b, *d_out;\n\
    // Allocate host memory\n\
    a   = (float*)malloc(sizeof(float) * N);\n\
    b   = (float*)malloc(sizeof(float) * N);\n\
    out = (float*)malloc(sizeof(float) * N);\n\
    // Initialize host arrays\n\
    for(int i = 0; i < N; i++){\n\
        a[i] = 1.0f;\n\
        b[i] = 2.0f;\n\
    }\n\
    // Allocate device memory\n\
    cudaMalloc((void**)&d_a, sizeof(float) * N);\n\
    cudaMalloc((void**)&d_b, sizeof(float) * N);\n\
    cudaMalloc((void**)&d_out, sizeof(float) * N);\n\
    // Transfer data from host to device memory\n\
    cudaMemcpy(d_a, a, sizeof(float) * N, cudaMemcpyHostToDevice);\n\
    cudaMemcpy(d_b, b, sizeof(float) * N, cudaMemcpyHostToDevice);\n\
    // Executing kernel\n\
    vector_add<<<1,1>>>(d_out, d_a, d_b, N);\n\
    // Transfer data back to host memory\n\
    cudaMemcpy(out, d_out, sizeof(float) * N, cudaMemcpyDeviceToHost);\n\
    // Verification\n\
    for(int i = 0; i < N; i++){\n\
        assert(fabs(out[i] - a[i] - b[i]) < MAX_ERR);\n\
    }\n\
    printf(\"out[0] = %f\", out[0]);\n\
    printf(\" PASSED\");\n\
    // Deallocate device memory\n\
    cudaFree(d_a);\n\
    cudaFree(d_b);\n\
    cudaFree(d_out);\n\
    // Deallocate host memory\n\
    free(a);\n\
    free(b);\n\
    free(out);\n\
}\n";
var juliaSource = 'println("hello world")';

var sources = {
    45: assemblySource,
    46: bashSource,
    47: basicSource,
    48: cSource,
    49: cSource,
    50: cSource,
    51: csharpSource,
    52: cppSource,
    53: cppSource,
    54: cppSource,
    55: lispSource,
    56: dSource,
    57: elixirSource,
    58: erlangSource,
    44: executableSource,
    59: fortranSource,
    60: goSource,
    61: haskellSource,
    62: javaSource,
    63: javaScriptSource,
    64: luaSource,
    65: ocamlSource,
    66: octaveSource,
    67: pascalSource,
    68: phpSource,
    43: plainTextSource,
    69: prologSource,
    70: pythonSource,
    71: pythonSource,
    72: rubySource,
    73: rustSource,
    74: typescriptSource,
    75: cSource,
    76: cppSource,
    77: cobolSource,
    78: kotlinSource,
    79: objectiveCSource,
    80: rSource,
    81: scalaSource,
    82: sqliteSource,
    83: swiftSource,
    84: vbSource,
    85: perlSource,
    86: clojureSource,
    87: fsharpSource,
    88: groovySource,
    89: cudaSource,
    90: juliaSource,
    91: pythonSource,
    92: pythonSource,
    93: mpicSource,
    94: mpicppSource,
    95: cppSource,
    1001: cSource,
    1002: cppSource,
    1003: c3Source,
    1004: javaSource,
    1005: javaTestSource,
    1006: mpiccSource,
    1007: mpicxxSource,
    1008: mpipySource,
    1009: nimSource,
    1010: pythonForMlSource,
    1011: bosqueSource
};

var fileNames = {
    45: "main.asm",
    46: "script.sh",
    47: "main.bas",
    48: "main.c",
    49: "main.c",
    50: "main.c",
    51: "Main.cs",
    52: "main.cpp",
    53: "main.cpp",
    54: "main.cpp",
    55: "script.lisp",
    56: "main.d",
    57: "script.exs",
    58: "main.erl",
    44: "a.out",
    59: "main.f90",
    60: "main.go",
    61: "main.hs",
    62: "Main.java",
    63: "script.js",
    64: "script.lua",
    65: "main.ml",
    66: "script.m",
    67: "main.pas",
    68: "script.php",
    43: "text.txt",
    69: "main.pro",
    70: "script.py",
    71: "script.py",
    72: "script.rb",
    73: "main.rs",
    74: "script.ts",
    75: "main.c",
    76: "main.cpp",
    77: "main.cob",
    78: "Main.kt",
    79: "main.m",
    80: "script.r",
    81: "Main.scala",
    82: "script.sql",
    83: "Main.swift",
    84: "Main.vb",
    85: "script.pl",
    86: "main.clj",
    87: "script.fsx",
    88: "script.groovy",
    89: "main.cu",
    90: "main.jl",
    91: "main.py",
    92: "main.py",
    93: "main.c",
    94: "main.cpp",
    95: "main.cpp",
    1001: "main.c",
    1002: "main.cpp",
    1003: "main.c3",
    1004: "Main.java",
    1005: "MainTest.java",
    1006: "main.c",
    1007: "main.cpp",
    1008: "script.py",
    1009: "main.nim",
    1010: "script.py",
    1011: "main.bsq"
};

var languageIdTable = {
    1001: 1,
    1002: 2,
    1003: 3,
    1004: 4,
    1005: 5,
    1006: 6,
    1007: 7,
    1008: 8,
    1009: 9,
    1010: 10,
    1011: 11
}

var extraApiUrl = "https://secure.judge0.com/extra";
var languageApiUrlTable = {
    1001: extraApiUrl,
    1002: extraApiUrl,
    1003: extraApiUrl,
    1004: extraApiUrl,
    1005: extraApiUrl,
    1006: extraApiUrl,
    1007: extraApiUrl,
    1008: extraApiUrl,
    1009: extraApiUrl,
    1010: extraApiUrl,
    1011: extraApiUrl
}