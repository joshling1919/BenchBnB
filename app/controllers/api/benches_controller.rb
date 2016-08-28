class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def benches_params
    params.require(:benches).permit(:bounds)
  end


end
