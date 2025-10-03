
import java.util.Scanner;

public class tictactao {
	private static final char EMPTY = ' ';
	private static final char PLAYER_X = 'X';
	private static final char PLAYER_O = 'O';
	private static char[][] board = new char[3][3];
	private static char currentPlayer = PLAYER_X;

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		initializeBoard();
		boolean gameEnded = false;
		System.out.println("Welcome to Tic Tac Toe!");
		printBoard();
		while (!gameEnded) {
			System.out.println("Player " + currentPlayer + ", enter your move (row and column: 1-3 1-3): ");
			int row = scanner.nextInt() - 1;
			int col = scanner.nextInt() - 1;
			if (row < 0 || row > 2 || col < 0 || col > 2) {
				System.out.println("Invalid position. Try again.");
				continue;
			}
			if (board[row][col] != EMPTY) {
				System.out.println("Cell already taken. Try again.");
				continue;
			}
			board[row][col] = currentPlayer;
			printBoard();
			if (checkWin(currentPlayer)) {
				System.out.println("Player " + currentPlayer + " wins!");
				gameEnded = true;
			} else if (isBoardFull()) {
				System.out.println("It's a draw!");
				gameEnded = true;
			} else {
				currentPlayer = (currentPlayer == PLAYER_X) ? PLAYER_O : PLAYER_X;
			}
		}
		scanner.close();
	}

	private static void initializeBoard() {
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				board[i][j] = EMPTY;
			}
		}
	}

	private static void printBoard() {
		System.out.println("-------------");
		for (int i = 0; i < 3; i++) {
			System.out.print("| ");
			for (int j = 0; j < 3; j++) {
				System.out.print(board[i][j] + " | ");
			}
			System.out.println();
			System.out.println("-------------");
		}
	}

	private static boolean checkWin(char player) {
		// Check rows and columns
		for (int i = 0; i < 3; i++) {
			if ((board[i][0] == player && board[i][1] == player && board[i][2] == player) ||
				(board[0][i] == player && board[1][i] == player && board[2][i] == player)) {
				return true;
			}
		}
		// Check diagonals
		if ((board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
			(board[0][2] == player && board[1][1] == player && board[2][0] == player)) {
			return true;
		}
		return false;
	}

	private static boolean isBoardFull() {
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (board[i][j] == EMPTY) {
					return false;
				}
			}
		}
		return true;
	}
}
