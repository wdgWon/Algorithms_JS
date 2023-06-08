#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> triangle) {
    for(int i = 1; i < triangle.size(); i++) {
        for(int j = 0; j < triangle[i].size(); j++) {
            int left = (j > 0) ? triangle[i-1][j-1] : 0;
            int right = (j < triangle[i-1].size()) ? triangle[i-1][j] : 0;
            int maxVal = max(left, right);
            triangle[i][j] += maxVal;
            cout << triangle[i][j] << " ";
        }
        cout << endl;
    }
    int maxValue = *std::max_element(triangle.back().begin(), triangle.back().end());
    return maxValue;
}

int main() {
    vector<vector<int>> triangle = {{7}, {3, 8}, {8, 1, 0}, {2, 7, 4, 4}, {4, 5, 2, 6, 5}};

    return solution(triangle);;
}
