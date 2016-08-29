class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.create(benches_params)
    render :show
  end
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def benches_params
    params.require(:benches).permit(:description, :seating, :lat, :lng)
  end


end
