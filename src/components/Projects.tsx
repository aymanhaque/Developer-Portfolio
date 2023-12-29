const Projects = () => {
  return (
    <div>
      <div className="flex justify-center my-14">
        <h1 className="flex text-7xl font-semibold">Projects</h1>
      </div>
      <div className="mx-8 my-8">
        {/* Terminal Mail */}
        <div className="flex my-48">
          <img
            className=" rounded-2xl mr-8 h-96 w-1/4 hover:h-3/4 hover:w-3/4"
            src="src/assets/terminalMail.png"
            alt="Terminal Mail"
          />
          <div>
            <h1 className="text-6xl font-semibold">Terminal Mail</h1>
            <p className="text-xl w-3/4">
              Used python to create a mail client which allows you to send
              emails and view your emails with different ways to sort(can sort
              through recent mail, mail from a specific sender, mail to a
              specific recipient, etc.)
            </p>
          </div>
        </div>
        {/* Tic Tac Toe */}
        <div className="flex my-48">
          <img
            className=" rounded-2xl mr-8 h-96 w-1/4 hover:h-3/4 hover:w-3/4"
            src="src/assets/ticTacToe.png"
            alt="Terminal Mail"
          />
          <div>
            <h1 className="text-6xl font-semibold">Tic-Tac-Toe</h1>
            <p className="text-xl w-3/4">
              Used python to create a working tic tac toe game in the terminal.
              Displays a 3x3 board which shows where the X’s and O’s are placed.
              Fully working and is able to check for all types of errors
              (placing X/O in already taken spots, etc.)
            </p>
          </div>
        </div>
        {/* BlackJack */}
        <div className="flex my-48">
          <img
            className=" rounded-2xl mr-8 object-fill h-96 w-1/4 hover:h-3/4 hover:w-3/4"
            src="src/assets/blackjack.png"
            alt="Terminal Mail"
          />
          <div>
            <h1 className="text-6xl font-semibold">Black Jack</h1>
            <p className="text-xl w-3/4">
              Used python to create a program where the player and the dealers
              continuously deals cards and declare war until either player runs
              out of cards or is unable to declare war.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
