Quant.Model.extends({
	nextTick:function( current ){
		// this.log(this.ema("$.LastPrice",5)(),current.LastPrice);
		this.buy(3);
	}
})