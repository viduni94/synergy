contract BaseContract {
	enum KillReason {EXECUTED, UNTIL, HORIZON, FAILED}

    event Killed(BaseContract.KillReason killReason);

    Marketplace public marketplace_;
    int public scale_;

    address public creator_;
    bool public alive_ = true;

    constructor(Marketplace marketplace, int scale) public {
    	marketplace_ = marketplace;
    	scale_ = scale;
    	creator_ = msg.sender;
    }

    function getHolder() internal view returns(address) {
		address holder;
		(,holder,,) = marketplace_.contracts_(this);
		return holder;
    }

    function getCounterparty() internal view returns(address) {
		address counterparty;
		(counterparty,,,) = marketplace_.contracts_(this);
		return counterparty;
    }

    function getCreator() internal view returns(address) {
		address creator;
		(,,creator,) = marketplace_.contracts_(this);
		return creator;
    }

    function proceed() public;

    function receive(Marketplace.Commodity commodity, int quantity) internal alive {
        marketplace_.receive(commodity, quantity);
    }

    function kill(BaseContract.KillReason killReason) internal alive {
        alive_ = false;
        emit Killed(killReason);
    }

    modifier alive {
        require(alive_);
        _;
    }
}