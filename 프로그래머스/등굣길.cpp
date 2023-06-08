#include <iostream>
#include <vector>

using namespace std;

int solution(int m, int n, vector<vector<int>>& puddles) {
    vector<vector<int>> memo(n, vector<int>(m, 1));

    for(auto& puddle : puddles) {
        int j = puddle[0] - 1;
        int i = puddle[1] - 1;
        memo[i][j] = 0;
    }

    for(int i = 1; i < n; i++) {
        for(int j = 1; j < m; j++) {
            if(memo[i][j] == 0) continue;
            int left = memo[i][j - 1];
            int above = memo[i - 1][j];
            memo[i][j] = (left + above) % 1000000007;
        }
    }

    return memo[n - 1][m - 1];
}

int main() {
    int m = 5; // 입력값 설정
    int n = 4;
    vector<vector<int>> puddles = {{2, 2}, {3, 4}, {4, 2}, {4, 4}}; // 입력값 설정

    int result = solution(m, n, puddles);
    cout << result << endl;

    return 0;
}
