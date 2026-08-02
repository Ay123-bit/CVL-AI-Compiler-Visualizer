# 🚀 CVL - AI Compiler Visualizer + LLVM Optimizer

CVL (Compiler Visualizer + LLVM Optimizer) is an AI-powered compiler analysis platform that visualizes the complete compilation pipeline of C++ programs.

It converts C++ source code into LLVM IR, generates Abstract Syntax Tree (AST), analyzes code complexity, and provides AI-based optimization suggestions.

---

# ✨ Features

## 🔹 Compiler Pipeline

- C++ source code compilation using Clang++
- LLVM IR generation
- Program execution
- Compilation error detection
- Complete compiler workflow visualization

---

## 🔹 LLVM IR Visualization

- View generated LLVM Intermediate Representation
- Analyze compiler generated optimized output
- Understand low-level compiler transformations

---

## 🔹 AST Visualization

- Generates Abstract Syntax Tree from C++ source code
- Converts Clang AST output into JSON structure
- Provides tree-based visualization

---

## 🔹 AI Optimization Analysis

- LLVM IR based optimization analysis
- Detects possible optimization opportunities
- Provides improvement suggestions

Example:

```
Arithmetic instruction detected.
Consider constant propagation.

Return value optimization possible.
```

---

## 🔹 Code Complexity Analysis

Provides:

- Function count
- Loop detection
- Branch detection
- Cyclomatic complexity
- Code quality score

---

## 🔹 Dashboard Metrics

Displays:

- LLVM build information
- Optimization count
- AI suggestion count
- Efficiency improvement percentage
- Compiler analysis results

---

# 🏗️ Project Architecture

```
CVL
│
├── backend
│   │
│   ├── compiler.py
│   ├── server.py
│   ├── ai_analysis.py
│   ├── analysis_rules.py
│   ├── complexity_analysis.py
│   ├── llm.py
│   └── compiler
│
│
├── src
│   │
│   ├── components
│   │   ├── AIAnalysis.jsx
│   │   ├── ASTViewer.jsx
│   │   ├── IRViewer.jsx
│   │   ├── ComplexityAnalysis.jsx
│   │   ├── CodeEditor.jsx
│   │   └── ErrorBox.jsx
│   │
│   ├── pages
│   │   └── Dashboard.jsx
│   │
│   └── services
│       └── compilerAPI.js
│
└── README.md
```

---

# 🛠️ Technologies Used

## Frontend

- React.js
- Vite
- JavaScript
- CSS

## Backend

- Python
- FastAPI
- Uvicorn

## Compiler Technology

- LLVM
- Clang++

## Analysis

- LLVM IR Analysis
- AST Parsing
- Static Code Analysis
- AI Optimization Rules

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>

cd CVL-AI-Compiler-Visualizer
```

---

# 🔥 Backend Setup

Open a new terminal.

First change directory to the backend folder:

```powershell
cd C:\Users\KIIT\Desktop\cvl\backend
```

After changing the directory, run the FastAPI server using Uvicorn:

```powershell
uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

Backend server will start at:

```
http://127.0.0.1:8000
```

Expected output:

```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

---

# ⚡ Frontend Setup

Open another terminal.

Navigate to the project root directory:

```powershell
cd C:\Users\KIIT\Desktop\cvl
```

Install dependencies:

```powershell
npm install
```

Start React development server:

```powershell
npm run dev
```

Frontend output:

```
VITE v8.2.0 ready

➜ Local:
http://localhost:5173/
```

---

# 🌐 Dashboard

After starting both backend and frontend servers, open:

```
http://localhost:5173/dashboard
```

---

# 🔄 Application Workflow

```
C++ Source Code
        |
        ↓
React Code Editor
        |
        ↓
FastAPI /compile API
        |
        ↓
Clang++ Compiler
        |
        ├── LLVM IR Generation
        |
        ├── AST Generation
        |
        ├── Program Execution
        |
        ├── AI Optimization Analysis
        |
        └── Complexity Analysis
                |
                ↓
          CVL Dashboard
```

---

# 🧪 Example C++ Input

```cpp
#include <iostream>

using namespace std;


int calculateSum(int n)
{
    int sum = 0;

    for(int i = 1; i <= n; i++)
    {
        sum += i;
    }

    return sum;
}


int main()
{
    cout << calculateSum(10);

    return 0;
}
```

---

# 📊 Example Output

## LLVM IR

```
define dso_local i32 @main()
{
    ret i32 55
}
```

---

## AI Optimization Suggestions

```
Arithmetic optimization detected.

Consider constant propagation.

Return value optimization possible.
```

---

## Complexity Analysis

```
Functions : 2

Loops : 1

Branches : 0

Cyclomatic Complexity : 2

Code Quality : 95%
```

---

# 🚀 Run Commands Summary

## Backend

```powershell
cd C:\Users\KIIT\Desktop\cvl\backend

uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

---

## Frontend

```powershell
cd C:\Users\KIIT\Desktop\cvl

npm run dev
```

---

# 📌 Future Improvements

- Real LLVM optimization pass comparison
- Before/After LLVM IR difference viewer
- Advanced LLM based optimization explanations
- User authentication
- Docker deployment
- Cloud hosting
- Compilation history tracking

---

# 👨‍💻 CVL Project

## AI Compiler Visualizer + LLVM Optimizer

Built using:

- React
- FastAPI
- LLVM
- Clang++
- Python
- Artificial Intelligence

---

⭐ If you find this project useful, consider giving it a star on GitHub.
